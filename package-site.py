"""Package the private Studio static export for the public Pages workflow."""
from pathlib import Path
from shutil import copy2
from zipfile import ZIP_DEFLATED, ZipFile

root = Path(__file__).resolve().parent
export = root / ".private" / "studio" / "out"
if not (export / "index.html").is_file():
    raise SystemExit("Build .private/studio with npm run build first.")
files = sorted(path for path in export.rglob("*") if path.is_file())
if any(path.is_symlink() or path.suffix == ".map" for path in files):
    raise SystemExit("Refusing to publish source maps or symbolic links.")
archive = root / "site.zip"
with ZipFile(archive, "w", ZIP_DEFLATED) as bundle:
    for path in files:
        bundle.write(path, path.relative_to(export).as_posix())
    bundle.write(root / "CNAME", "CNAME")
    bundle.write(root / ".nojekyll", ".nojekyll")
copy2(export / "index.html", root / "index.html")
print(f"Packaged {len(files) + 2} website files in {archive.name}")
