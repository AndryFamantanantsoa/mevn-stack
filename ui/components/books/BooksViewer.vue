<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-title"
      >
        <b-form-input
          id="input-title"
          v-model="book.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Author:" label-for="input-author">
        <b-form-input
          id="input-author"
          v-model="book.author"
          required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-2" label="description:" label-for="input-description">
        <b-form-textarea
          id="input-description"
          v-model="book.description"
          rows="3"
        ></b-form-textarea>
      </b-form-group>
      
      <b-form-group id="input-group-2" label="edition:" label-for="input-edition">
        <b-form-input
          id="input-edition"
          v-model="book.edition"
        ></b-form-input>
      </b-form-group> 
      
      <b-form-group id="input-group-2" label="isbn:" label-for="input-isbn">
        <b-form-input
          id="input-isbn"
          v-model="book.isbn"
        ></b-form-input>
      </b-form-group>

      <b-button variant="primary" @click="addBook(book)">{{action}}</b-button>
      <b-button to="/list-book" variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        book: {
          title: this.bookData.title,
          author: this.bookData.author,
          description: this.bookData.description,
          edition: this.bookData.edition,
          isbn: this.bookData.isbn
        }
      }
    },
    props: ["addBook", "action", "bookData" ]
  }
</script>
