const fs = require('fs').promises;

async function readAll () {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    return data;
  } catch (e) {
    console.error(`Erro ao ler o arquivo: ${e.message}`);
  }
}

async function main () {
  try {
    const data = await readAll();
    const response = JSON.parse(data);
    response.forEach((element) => {
      console.log(element.id, ' - ', element.name);
    });
    
  } catch (e) {
    console.error(`Erro ao ler o arquivo: ${e.message}`);
  }
}

main();