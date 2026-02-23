export default function Container({ children }) {
  return (
    <div className="w-[50%] mx-auto py-10 space-y-14">
      {children}
    </div>
  );
}