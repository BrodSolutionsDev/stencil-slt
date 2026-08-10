export async function fetchRelatedProducts(id, token) {
    const res = await fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `
            {
                site {
                product(entityId: ${id}) {
                    relatedProducts(first: 4) {
                    edges {
                        node {
                        entityId
                        name
                        addToCartUrl
                        prices {
                            price {
                            value
                            }
                            priceRange {
                            min {
                                value
                            }
                            max {
                                value
                            }
                            }
                        }
                        defaultImage {
                            url(width: 250, height:250)
                        }
                        }
                    }
                    }
                }
                }
            }`,
        }),
    });
    const { data } = await res.json();
    return data.site.product.relatedProducts.edges.map(({ node }) => ({
        entityId: node.entityId,
        name: node.name,
        addToCartUrl: node.addToCartUrl,
        image: node.defaultImage.url,
        priceRange: {
            minPrice: node.prices.priceRange.min.value,
            maxPrice: node.prices.priceRange.max.value,
        },
        defaultPrice: node.prices.price.value,
    }));
}
