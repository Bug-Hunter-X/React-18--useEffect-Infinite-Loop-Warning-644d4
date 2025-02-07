# React 18+ useEffect Infinite Loop Warning

This repository demonstrates a common error in React 18 and above related to infinite loops within the `useEffect` hook.  The example shows a simple component that inadvertently causes an infinite loop due to incorrectly using the state update function within the `useEffect` hook without a dependency array.