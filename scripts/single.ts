// Example usage: ts-node scripts/single.ts path/to/source.map 1 2

import { SourceMapConsumer } from 'source-map';
import { promises as fs } from 'fs';

async function main(path: string, line: number, column: number) {
    const mapFile = await fs.readFile(path, 'utf-8');
    await SourceMapConsumer.with(mapFile, null, (consumer) => {
        console.log(consumer.originalPositionFor({ line, column }));
    });
}

main(process.argv[2], parseInt(process.argv[3]), parseInt(process.argv[4]));
