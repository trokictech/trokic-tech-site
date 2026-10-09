"""Package a Studio static export for the public Pages workflow."""
from pathlib import Path
from shutil import copy2
import sys
from zipfile import ZIP_DEFLATED, ZipFile

root = Path(__file__).resolve().parent
export = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else root / ".private" / "studio" / "out"
if not (export / "index.html").is_file():
    raise SystemExit(f"Build the website with npm run build first: {export}")
files = sorted(path for path in export.rglob("*") if path.is_file())
if any(path.is_symlink() or path.suffix == ".map" for path in files):
    raise SystemExit("Refusing to publish source maps or symbolic links.")
archive = root / "site.zip"
with ZipFile(archive, "w", ZIP_DEFLATED) as bundle:
    for path in files:
        relative = path.relative_to(export)
        bundle.write(path, relative.as_posix())
        # Next's navigation prefetch requests flatten the segment file name.
        if len(relative.parts) > 1 and relative.parent.name.startswith("__next."):
            alias = relative.parent.parent / (relative.parent.name + "." + relative.name)
            bundle.write(path, alias.as_posix())
    bundle.write(root / "CNAME", "CNAME")
    bundle.write(root / ".nojekyll", ".nojekyll")
copy2(export / "index.html", root / "index.html")
print(f"Packaged {len(bundle.namelist())} website files in {archive.name}")
