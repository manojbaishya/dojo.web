HTML, CSS and Javascript files.

Serve root directory with a static file server:

```
git clone <repo>
cd <repo>
cargo install --locked miniserve
miniserve --index index.html
```