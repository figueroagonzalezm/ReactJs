import Content from "./Content"
// USENAVIGATE HOOK:
// useNavigate is a React Router hook for programmatic navigation.
// Unlike Link (which is declarative), useNavigate allows navigation from event handlers,
// after form submission, in useEffect, or any JavaScript logic.
import { useNavigate } from "react-router-dom"


const About = () => {

  // CREATING NAVIGATE FUNCTION:
  // useNavigate returns a function that can be called to navigate to different routes.
  // This function is similar to history.push() in React Router v5.
  const navigate = useNavigate();

  // PROGRAMMATIC NAVIGATION:
  // This function demonstrates navigating in response to a user action (button click).
  //
  // COMMON USE CASES FOR useNavigate:
  // - Navigate after form submission
  // - Redirect after authentication
  // - Navigate based on conditional logic
  // - Go back/forward in browser history
  // - Navigate from non-JSX code
  //
  // NAVIGATION OPTIONS:
  // navigate('/path')           - Navigate to a path
  // navigate(-1)                - Go back one page (like browser back button)
  // navigate(1)                 - Go forward one page
  // navigate('/path', { replace: true })  - Replace current entry in history
  // navigate('/path', { state: { data } }) - Pass state to next route
  //
  // WHEN TO USE:
  // - Link/NavLink: For standard navigation links in JSX
  // - useNavigate: For navigation triggered by logic, events, or side effects
  const handleNavigation = () => {
    // Navigate to the home page when button is clicked
    navigate('/');

    // OTHER EXAMPLES:
    // navigate('/product/123');              // Navigate with parameter
    // navigate(-1);                          // Go back
    // navigate('/', { replace: true });      // Replace history entry (can't go back)
    // navigate('/dashboard', { state: { fromAbout: true } }); // Pass state
  }


  return (
    <>
      <h1>About</h1>

      {/* COMPONENT REUSE:
          Content component is reused multiple times in this route.
          This demonstrates that components can be used anywhere,
          regardless of which route is active. */}
      <Content />
      <Content />
      <Content />
      <Content />

      {/* PROGRAMMATIC NAVIGATION TRIGGER:
          Regular HTML button that triggers navigation via onClick handler.
          This is different from Link component which is specifically for navigation.
          Use this approach when navigation is part of business logic,
          not just a simple "go to this page" action. */}
      <button onClick={handleNavigation} >Go Home</button>
    </>
  )
}

export default About