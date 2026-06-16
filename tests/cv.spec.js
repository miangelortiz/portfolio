const { test, expect } = require('@playwright/test');

test.describe('CV Online / Portfolio Integration Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Navegar a la URL base antes de cada test
    await page.goto('/');
  });

  test('1. Debería cargar la página con el título y cabecera correctos', async ({ page }) => {
    // Comprobar título de la página
    await expect(page).toHaveTitle(/Miguel Angel Ortiz Olid/);
    
    // Comprobar cabecera principal H1
    const header = page.locator('header h1');
    await expect(header).toHaveText('Miguel Angel Ortiz Olid');
  });

  test('2. Debería alternar el tema visual entre claro y oscuro', async ({ page }) => {
    const html = page.locator('html');
    const themeBtn = page.locator('#theme-toggle');

    // Obtener tema inicial
    const initialTheme = await html.getAttribute('data-theme');
    const expectedTheme = initialTheme === 'dark' ? 'light' : 'dark';

    // Hacer clic para cambiar de tema
    await themeBtn.click();
    await expect(html).toHaveAttribute('data-theme', expectedTheme);

    // Hacer clic de nuevo para retornar al tema inicial
    await themeBtn.click();
    await expect(html).toHaveAttribute('data-theme', initialTheme);
  });

  test('3. Debería cambiar el idioma bilingüe dinámicamente', async ({ page }) => {
    const html = page.locator('html');
    const langBtn = page.locator('#lang-toggle');

    // Obtener idioma por defecto e idioma objetivo
    const initialLang = await html.getAttribute('lang') || 'es';
    const targetLang = initialLang === 'es' ? 'en' : 'es';

    // Cambiar idioma
    await langBtn.click();
    await expect(html).toHaveAttribute('lang', targetLang);

    // Verificar que un elemento clave del DOM se haya traducido
    const aboutTitle = page.locator('#sobre-mi h2 span');
    if (targetLang === 'en') {
      await expect(aboutTitle).toHaveText('About me');
    } else {
      await expect(aboutTitle).toHaveText('Sobre mí');
    }
  });

  test('4. Debería abrir y cerrar la consola terminal interactiva (CLI)', async ({ page }) => {
    const terminalModal = page.locator('#terminal-modal');
    const openBtn = page.locator('#terminal-toggle-btn');
    const closeBtn = page.locator('#terminal-close-dot');

    // Comprobar que inicialmente está oculta (no tiene clase active)
    await expect(terminalModal).not.toHaveClass(/active/);

    // Abrir terminal
    await openBtn.click();
    await expect(terminalModal).toHaveClass(/active/);

    // Asegurar foco automático en el input
    const input = page.locator('#terminal-input');
    await expect(input).toBeFocused();

    // Cerrar terminal
    await closeBtn.click();
    await expect(terminalModal).not.toHaveClass(/active/);
  });

  test('5. Debería procesar comandos correctamente en la terminal CLI', async ({ page }) => {
    const openBtn = page.locator('#terminal-toggle-btn');
    await openBtn.click();

    const input = page.locator('#terminal-input');
    const output = page.locator('#terminal-output');

    // Ejecutar comando 'help'
    await input.fill('help');
    await input.press('Enter');

    // Verificar listado de ayuda
    await expect(output).toContainText('cv');
    await expect(output).toContainText('skills');
    await expect(output).toContainText('neofetch');

    // Ejecutar comando 'neofetch'
    await input.fill('neofetch');
    await input.press('Enter');

    // Verificar salida de neofetch
    await expect(output).toContainText('MiguelOS');
    await expect(output).toContainText('Kernel: Node.js');
  });
});
