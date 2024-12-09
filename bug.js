```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using the function's return value as a cleanup function
    return () => {
      console.log('Cleanup function executed');
      return 10; //This is wrong, return should be a function or undefined
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```