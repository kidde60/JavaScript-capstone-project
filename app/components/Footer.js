export default function Footer() {
  return (
    <footer className="border-t border-cyan-300 mt-auto py-6 sm:py-8 md:py-10 px-4 sm:px-5 md:px-6 text-xs sm:text-sm text-center text-white">
      <div className="max-w-content mx-auto">
        © {new Date().getFullYear()}. Created by{" "}
        <a
          href="https://github.com/DJ-MrJay"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 hover:text-white hover:underline transition-colors"
        >
          Jonah
        </a>
        .
      </div>
    </footer>
  );
}
