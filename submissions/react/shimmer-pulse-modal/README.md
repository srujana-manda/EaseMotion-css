# Sample Shimmer Pulse Modal

## Props

| Prop | Type | Description |
|------|------|-------------|
| open | Boolean | Controls modal visibility |
| onClose | Function | Closes modal |
| title | String | Modal heading |
| children | ReactNode | Modal content |

## Usage

```jsx
<ShimmerPulseModal
  open={show}
  title="Terminal Modal"
  onClose={() => setShow(false)}
>
  Welcome to the sample modal.
</ShimmerPulseModal>
```
