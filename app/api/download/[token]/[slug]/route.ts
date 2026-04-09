import fs from 'node:fs';
import path from 'node:path';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import { hasActivePaidAccess } from '@/lib/purchases';
import { TOOLKIT_FILES } from '@/lib/stripe';

export async function GET(_: Request, context: { params: Promise<{ token: string; slug: string }> }) {
  const { token, slug } = await context.params;
  const purchase = await hasActivePaidAccess(token);

  if (!purchase || purchase.status !== 'paid') {
    return NextResponse.json({ error: 'Access not available yet.' }, { status: 403 });
  }

  const fileDef = TOOLKIT_FILES.find((entry) => entry.slug === slug);
  if (!fileDef) notFound();

  const filePath = path.join(process.cwd(), 'private', 'pdfs', fileDef.fileName);
  if (!fs.existsSync(filePath)) notFound();

  const file = fs.readFileSync(filePath);
  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileDef.fileName}"`,
      'Cache-Control': 'private, no-store',
    },
  });
}
