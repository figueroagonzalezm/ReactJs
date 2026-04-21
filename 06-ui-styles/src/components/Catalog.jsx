import Book from "./Book/Book";

const Catalog = () => {

    const books = [
        { id: 1, title: 'El Gran Gatsby', publication: 1925 },
        { id: 2, title: 'Cien Años de Soledad', publication: 1967 },
        { id: 3, title: 'Harry Potter y la Piedra Filosofal', publication: 1997 },
        { id: 4, title: 'El Hobbit', publication: 1937 },
        { id: 5, title: '1984', publication: 1949 },
        { id: 6, title: 'Crimen y Castigo', publication: 1866 },
        { id: 7, title: 'Matar un Ruiseñor', publication: 1960 },
        { id: 8, title: 'Don Quijote de la Mancha', publication: 1605 },
    ];

    // INLINE STYLES IN REACT:
    // This demonstrates the inline styling approach using the 'style' attribute.
    // In React, inline styles are written as JavaScript objects, not strings.
    //
    // KEY CHARACTERISTICS:
    // 1. CSS property names use camelCase instead of kebab-case (flexWrap vs flex-wrap)
    // 2. Values are strings (with units like 'px') or numbers (for unitless properties)
    // 3. Styles are defined as JavaScript objects with curly braces
    // 4. The style attribute receives this object: style={{property: value}}
    //
    // PROS:
    // - Styles are scoped to this specific component instance
    // - Dynamic styling is easy (can use JavaScript variables/expressions)
    // - No need to worry about class name conflicts
    // - Good for component-specific or conditional styles
    //
    // CONS:
    // - Cannot use pseudo-classes (:hover, :active) or pseudo-elements (::before, ::after)
    // - Cannot use media queries
    // - Slightly worse performance than CSS classes (styles recalculated on each render)
    // - Less maintainable for complex styling
    // - No CSS features like animations, keyframes, or advanced selectors
    //
    // WHEN TO USE:
    // - Small, dynamic styles that change based on props or state
    // - Quick prototyping or one-off styling needs
    // - When you need to compute styles programmatically
    return (
        <div style={
            {
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
            }
        }>
            {books.map(
                book => (
                    <Book key={book.id} book={book} />
                )
            )}
        </div>
    )
}

export default Catalog