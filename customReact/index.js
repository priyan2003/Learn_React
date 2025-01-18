function customRender(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    mainContainer.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href : 'https://www.facebook.com',
        target: '_black'
    },
    children: 'Go to facebook'
}
const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer);