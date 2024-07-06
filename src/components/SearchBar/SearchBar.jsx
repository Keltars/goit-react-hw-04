import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    values.search !== ""
      ? onSearch(values.search)
      : toast.error("Please fill search field", { position: "top-right" });
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit">Search</button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
