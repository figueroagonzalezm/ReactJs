// REUSABLE COMPONENT IN ROUTING CONTEXT:
// This component is NOT directly connected to routing but is used within routed components.
// It demonstrates that regular React components can be composed within route components.
//
// COMPONENT REUSE ACROSS ROUTES:
// - Content is used in both Home and About components
// - It doesn't need to know about routing or which route it's in
// - This is a best practice: separate routing logic from presentational components
// - Makes components more reusable and easier to test
// - Follows the Single Responsibility Principle (SRP)
//
// BENEFITS:
// - No routing dependencies (easier to test)
// - Can be used anywhere in the app
// - More maintainable and modular code
// - Clear separation of concerns

const Content = () => {
  return (
    <>
      <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </>
  )
}

export default Content
