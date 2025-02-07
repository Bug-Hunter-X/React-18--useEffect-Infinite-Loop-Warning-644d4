```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct solution: Add count as dependency to useEffect to prevent infinite loop
    setCount(prevCount => prevCount + 1);
  }, [count]); // added count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```