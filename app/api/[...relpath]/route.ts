import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ relpath: string[] }> }
) {
    const { relpath: relpathSegments } = await params;
    const filename = relpathSegments?.join('/'); // Reconstruct relpath with slashes
    console.log(filename);

    if (!filename) {
        return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
    }

    const filePath = path.join('localhost:3000', filename);

    try {
        await fs.access(filePath);
        const file = await fs.readFile(filePath);

        const ext = filename.split('.').pop()?.toLowerCase() || '';
        const contentType = {
            pdf: 'application/pdf',
            png: 'image/png',
            jpg: 'image/jpeg',
            json: 'application/json',
            fcf: 'text/plain',
            pkglist: 'text/plain',
        }[ext] || 'application/octet-stream';

        return new NextResponse(file, {
            headers: {
                'Content-Disposition': `download; filename="${path.basename(filename)}"`,
                'Content-Type': contentType,
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
}

