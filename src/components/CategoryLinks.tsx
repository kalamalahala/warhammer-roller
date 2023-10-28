import { Component, For, Show } from "solid-js";

type CategoryLinksType = {
    id: string;
    hidden: string;
    name: string;
    targetId: string;
    primary: string;
};

type CategoryLinksProps = {
    categories: CategoryLinksType[];
};

const CategoryLinks: Component<CategoryLinksProps> = (
    props: CategoryLinksProps,
) => {
    const categories = props.categories;

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].hidden === "true") {
            categories.splice(i, 1);
        }

        if (categories[i].name === "New CategoryLink") {
            categories.splice(i, 1);
        }
    }
    return (
        <div class="m-0 p-0">

            <ul class="list-unstyled d-flex flex-column justify-content-between">
                <For each={categories}>
                    {(category) => (
                        <li class="mx-1">
                            <small>{category.name}</small>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
};

export default CategoryLinks;
