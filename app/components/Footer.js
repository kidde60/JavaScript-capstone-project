export default function Footer() {
  return (
    <footer className="border-t border-cyan-300 mt-auto py-[30px] text-xs text-center text-white">
      <div className="container-max-width">
        © {new Date().getFullYear()}. Created by{" "}
        <a
          href="https://github.com/DJ-MrJay"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 hover:underline"
        >
          Jonah
        </a>
        .
      </div>
    </footer>
  );
}
