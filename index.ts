import { SourceMapConsumer } from 'source-map'
import fs from 'fs/promises'

async function main() {
	const mapFile = await fs.readFile(process.argv[2], 'utf-8');
	const consumer = await new SourceMapConsumer(mapFile);
	console.log(consumer.originalPositionFor({ line: parseInt(process.argv[3]), column: parseInt(process.argv[4]) }));
}

main()
