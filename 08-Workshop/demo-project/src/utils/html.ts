export function renderHtml(template: string): void {
    const mainElement = document.querySelector('main');

    if (mainElement) {
        mainElement.innerHTML = template;
    }
}