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

    const filePath = path.join('goto', filename);

    try {
        await fs.access(filePath);
        const file = await fs.readFile(filePath);

        return new NextResponse(file, {
            headers: {
                'Content-Disposition': `download; filename="${path.basename(filename)}"`,
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
}

