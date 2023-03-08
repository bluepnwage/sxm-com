import styles from "./styles.module.css";
export function Hotkey({ children }: { children: React.ReactNode }) {
  return <kbd className={styles.keyboard}>{children}</kbd>;
}
