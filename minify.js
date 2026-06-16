const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Ejecutando esbuild para minificar los archivos estáticos...');
  
  // 1. Minificar el archivo CSS y el archivo JS usando esbuild local
  execSync('npx esbuild assets/css/style.css --minify --outfile=assets/css/style.min.css', { stdio: 'inherit' });
  execSync('npx esbuild assets/js/script.js --minify --outfile=assets/js/script.min.js', { stdio: 'inherit' });

  // 2. Rutas a los archivos
  const htmlPath = path.resolve(__dirname, 'index.html');
  const minCssPath = path.resolve(__dirname, 'assets/css/style.min.css');

  // 3. Leer index.html y el CSS minificado
  let html = fs.readFileSync(htmlPath, 'utf8');
  const minCss = fs.readFileSync(minCssPath, 'utf8').trim();

  // 4. Buscar y reemplazar el bloque entre marcadores STYLE_START y STYLE_END
  const styleStart = '<!-- STYLE_START -->';
  const styleEnd = '<!-- STYLE_END -->';

  const regex = new RegExp(`${styleStart}[\\s\\S]*?${styleEnd}`);
  const inlinedStyleBlock = `${styleStart}\n    <style>${minCss}</style>\n    ${styleEnd}`;

  if (regex.test(html)) {
    html = html.replace(regex, inlinedStyleBlock);
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log('CSS minificado inyectado con éxito directamente en index.html (0 solicitudes bloqueantes).');
  } else {
    console.warn('ADVERTENCIA: No se encontraron los marcadores <!-- STYLE_START --> y <!-- STYLE_END --> en index.html');
  }
} catch (error) {
  console.error('Error durante el proceso de minificación e inyección:', error);
  process.exit(1);
}
