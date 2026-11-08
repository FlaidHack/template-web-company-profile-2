import { a5 as head } from "../../chunks/index.js";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Archity — Architecture &amp; Interiors</title>`);
    });
  });
  children($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
