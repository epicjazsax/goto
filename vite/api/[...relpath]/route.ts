// api/[...path]/route.ts
import path from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';

const execPromise = promisify(exec);

export async function GET(
    req: Request,
    { params }: { params: Promise<{ relpath: string[] }> }
) {
    try {
        const { relpath: relpathSegments } = await params;
        const filename = relpathSegments?.join('/');
        console.log(filename);

        if (!filename) {
            return Response.json({ error: 'Filename is required' }, { status: 400 });
        }

        const filePath = "'" + path.join('/goto/', filename) + "'";
        console.log(filePath);

        const attribs = "";

        const { stdout, stderr } = await execPromise(`exiftool ${attribs} -j ${filePath}`);
        const output = JSON.parse(stdout);

        if (stderr) {
            console.error('Command stderr:', stderr);
        }

        let versions = output[0]
        delete versions.SourceFile
        return Response.json(
            output[0]
        );

    } catch (error) {
        return Response.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

