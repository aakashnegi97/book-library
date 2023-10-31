export const config = {
  routes: {
    home: {
      url: "/home",
    },
    update: {
      url: "/update",
    },
    create: {
      url: "/create",
    },
  },

  initialFormState: {
    title: "",
    author: "",
    country: "",
    language: "",
    link: "",
    pages: "",
    year: "",
  },

  form: {
    title: {
      label: "Title",
      field: "title",
      type: "text",
      required: true,
    },
    author: {
      label: "Author",
      field: "author",
      type: "text",
      required: true,
    },
    country: {
      label: "Country",
      field: "country",
      type: "text",
      required: true,
    },
    language: {
      label: "Language",
      field: "language",
      type: "text",
      required: true,
    },
    link: {
      label: "Link",
      field: "link",
      type: "text",
      required: true,
    },
    pages: {
      label: "Pages",
      field: "pages",
      type: "number",
      required: true,
    },
    year: {
      label: "Year",
      field: "year",
      type: "number",
      required: true,
    },
  },

  formButtonText: (isFormData) => (isFormData ? "UPDATE" : "CREATE"),

  bookCard: {
    language: "Language: ",
    author: "Author: ",
    country: "Country: ",
    pages: "Pages: ",
    year: "Year: ",
    link: "Link",
  },

  tabs: {
    bookList: {
      label: "Books List",
    },
    createBook: {
      label: "Create Book",
    },
  },
};
