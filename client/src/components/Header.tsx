export default function Header() {
  return (
    <header className="pt-10 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="text-center border-b border-accent pb-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Mifta Rachman</h1>
        <p className="text-secondary italic mb-4">Faculty of Animal Science, Gadjah Mada University</p>
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 text-sm">
          <span>Verified email at ugm.ac.id</span>
        </div>
      </div>
    </header>
  );
}
