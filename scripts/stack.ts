// Example sage: ts-node scripts/stack.ts path/to/source.map

import { SourceMapConsumer } from 'source-map';
import { promises as fs } from 'fs';

// example positions
// ["1:1", "1:2", "1:3"]
const positions: string[] = [];

async function main(path: string) {
    const mapFile = await fs.readFile(path, 'utf-8');
    await SourceMapConsumer.with(mapFile, null, (consumer) => {
        positions.forEach((lineColumn) => {
            const [line, column] = lineColumn.split(':').map((x) => parseInt(x));
            console.log(consumer.originalPositionFor({ line, column }));
        });
    });
}

main(process.argv[2]);
