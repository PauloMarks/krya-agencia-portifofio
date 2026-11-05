<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- The links page styles live as named component classes plus brand tokens in `src/styles.css` (not inline utilities), so the black-and-gold look is tuned in one place.
- Outbound contact destinations live in a browser-safe links module with focused tests so visual refinements cannot silently change the studio's contact details.
- Krya actions use the shared Button's brand variant and fluid size with named CSS classes so links and error recovery share accessible interaction states.
