const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Charger le fichier index.html
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

// Utiliser jsdom pour simuler un DOM
const dom = new JSDOM(html);

describe("HTML structure tests", () => {
    it("should have a title", () => {
        const title = dom.window.document.querySelector('title');
        expect(title).not.toBeNull();
        expect(title.textContent).toBe("Title of the page");
    });

    it("should have a specific element", () => {
        const element = dom.window.document.querySelector('#element-id');
        expect(element).not.toBeNull();
    });

});