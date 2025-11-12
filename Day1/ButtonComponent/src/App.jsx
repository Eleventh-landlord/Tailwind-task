import ButtonComponent from "./ButtonComponent.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-100 p-6">
      <ButtonComponent variant="primary">Primary Button</ButtonComponent>
      <ButtonComponent variant="secondary">Secondary Button</ButtonComponent>
      <ButtonComponent variant="danger">Danger Button</ButtonComponent>
      <ButtonComponent variant="success">Success Button</ButtonComponent>

      <ButtonComponent variant="primary" size="large">Large Button</ButtonComponent>
      <ButtonComponent variant="secondary" size="small">Small Button</ButtonComponent>
    </div>
  );
}

export default App;
