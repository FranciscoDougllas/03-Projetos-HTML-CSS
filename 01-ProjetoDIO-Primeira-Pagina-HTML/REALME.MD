# Projeto de Animação com Intersection Observer

Este projeto utiliza técnicas modernas de desenvolvimento web para criar animações responsivas e atraentes, aproveitando o `IntersectionObserver` da API JavaScript e boas práticas de estilização com CSS.

## Funcionalidades

- **Animação de Surgimento:**
  - As imagens surgem suavemente ao entrarem na área visível do usuário.
  - Implementado usando a API `IntersectionObserver`.
  
- **Responsividade:**
  - Ajuste dinâmico do layout e comportamento das animações para diferentes tamanhos de tela.
  - Desativa as animações em telas menores que 800px para melhorar a experiência do usuário.

- **Design Moderno:**
  - Uso de fontes da família Poppins para uma apresentação mais elegante.
  - Layout responsivo e estilizações atrativas.

## Estrutura do Projeto

### HTML
- **Cabeçalho (`#header`):**
  - Contém um logotipo e uma barra de navegação estilizada.
- **Seções (`section`):**
  - Cada seção exibe imagens e conteúdos com animações aplicadas.
- **Rodapé (`#footer`):**
  - Exibe informações adicionais, links e direitos autorais.

### CSS
- **Estilização Geral:**
  - Uso de `flexbox` para layout responsivo.
  - Paleta de cores que combina tons neutros e vibrantes.
- **Animações:**
  - Define a animação de surgimento com `@keyframes` e transições suaves.
- **Media Queries:**
  - Garante uma boa experiência em dispositivos menores ajustando layout e desativando animações.

### JavaScript
- **IntersectionObserver:**
  - Monitora os elementos (imagens) para detectar quando entram na área visível.
  - Aplica a classe `visible` para ativar animações e otimiza a performance interrompendo a observação após o primeiro disparo.

## Tecnologias Utilizadas

- **HTML5:** Marcação semântica e estruturada.
- **CSS3:** Estilização moderna com suporte a animações e responsividade.
- **JavaScript:** Implementação de interatividade e observação de elementos.

## Destaques do Código

### JavaScript (Intersection Observer)
```javascript
const images = document.querySelectorAll('section .imagen');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

images.forEach(image => {
    observer.observe(image);
});
```

### CSS (Animações)
```css
.imagen {
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.imagen.visible {
    opacity: 1;
    transform: translateY(0);
    animation: surgir 1s ease-out;
}

@keyframes surgir {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## Como Executar o Projeto

1. **Clonar o Repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Abrir o Arquivo HTML:**
   Navegue até o diretório do projeto e abra o arquivo principal `index.html` no navegador.

3. **Customização:**
   Modifique o estilo ou os textos diretamente nos arquivos HTML e CSS.

## Licença

Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para usar, modificar e compartilhar! :)
