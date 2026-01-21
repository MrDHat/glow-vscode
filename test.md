# Glow Markdown Preview Test

This document tests all the Glow-style markdown elements.

## Headings

### Level 3 Heading

#### Level 4 Heading

##### Level 5 Heading

###### Level 6 Heading

---

## Text Formatting

This is regular text with **bold text** and *italic text* and ***bold italic***.

You can also use `inline code` within paragraphs.

---

## Links

Here's a [link to GitHub](https://github.com) and another to [VS Code](https://code.visualstudio.com).

---

## Blockquotes

> This is a blockquote. It should have a purple left border and be italicized.
>
> It can span multiple paragraphs.

> Nested blockquotes:
>> Are also supported
>>> Going three levels deep

---

## Lists

### Unordered Lists

- First item with bullet
- Second item
  - Nested item with different bullet
  - Another nested item
    - Third level nesting
    - Another third level
- Back to first level

### Ordered Lists

1. First numbered item
2. Second numbered item
3. Third numbered item

---

## Task Lists

- [x] Completed task
- [x] Another completed task
- [ ] Incomplete task
- [ ] Another incomplete task

---

## Code Blocks

Here's a JavaScript code block:

```javascript
function greet(name) {
    // This is a comment
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
    return greeting;
}

const result = greet("World");
```

Python example:

```python
def fibonacci(n):
    """Calculate fibonacci sequence"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Print first 10 numbers
for i in range(10):
    print(fibonacci(i))
```

TypeScript example:

```typescript
interface User {
    name: string;
    age: number;
    email?: string;
}

const createUser = (data: User): User => {
    return { ...data };
};
```

---

## Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Headings | Yellow H1, Blue H2-H5, Green H6 | Done |
| Code | Pink on dark gray | Done |
| Links | Cyan with underline | Done |
| Tables | Blue headers, alternating rows | Done |

### Another Table

| Name | Role | Experience |
|------|------|------------|
| Alice | Developer | 5 years |
| Bob | Designer | 3 years |
| Carol | Manager | 8 years |

---

## Images

![VS Code Logo](https://code.visualstudio.com/assets/images/code-stable.png)

---

## Horizontal Rules

Above this line is content.

---

Below this line is more content.

***

Another separator style.

---

## Keyboard Keys

Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> to open preview.

Use <kbd>Cmd</kbd> + <kbd>K</kbd> <kbd>V</kbd> for side-by-side preview.

---

## Definition Lists (if supported)

Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2

---

## Emphasis Combinations

This text has **bold**, *italic*, `code`, and [links](https://example.com) all together.

You can nest **bold with *italic* inside** or *italic with **bold** inside*.

---

## Long Code Line

```
This is a very long line of code that should cause horizontal scrolling in the code block to test the overflow behavior of the styled code blocks
```

---

## Footnotes (if supported)

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

---

## End of Test Document

If you can see all the above elements styled correctly with the Glow theme:
- Yellow H1 on blue background
- Blue H2-H5 with prefixes
- Green H6
- Pink code on dark gray
- Cyan links
- Purple blockquote borders
- Custom list bullets (•, ◦, ▪)
- Styled checkboxes
- Blue table headers with alternating rows

Then the extension is working correctly!
