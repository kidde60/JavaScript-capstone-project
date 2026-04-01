export default function Footer() {
  return (
    <footer className="footer">
      <div className="app-container">
        © {new Date().getFullYear()}. Created by{" "}
        <a
          href="https://github.com/DJ-MrJay"
          target="_blank"
          rel="noreferrer"
        >
          Jonah
        </a>
        .
      </div>
    </footer>
  );
}
