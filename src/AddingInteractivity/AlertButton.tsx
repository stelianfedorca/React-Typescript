interface AlertButtonProps {
  message: string;
  children?: string;
}

export default function AlertButton({ message, children }: AlertButtonProps) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
