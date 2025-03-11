<template>
  <div class="admin-page">
    <h1>Content Management System</h1>
    
    <div class="tabs">
      <button 
        :class="{ active: activeTab === 'caseStudies' }" 
        @click="activeTab = 'caseStudies'"
      >
        Case Studies
      </button>
      <button 
        :class="{ active: activeTab === 'blogPosts' }" 
        @click="activeTab = 'blogPosts'"
      >
        Blog Posts
      </button>
    </div>
    
    <div v-if="activeTab === 'caseStudies'" class="content-section">
      <h2>Case Studies</h2>
      <button @click="createNewCaseStudy" class="create-btn">Create New Case Study</button>
      
      <div class="items-list">
        <div v-for="(item, index) in caseStudies" :key="index" class="item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.subtitle }}</p>
          <div class="actions">
            <button @click="editCaseStudy(item.path)" class="edit-btn">Edit</button>
          </div>
        </div>
      </div>
      
      <div v-if="showCaseStudyForm" class="form-container">
        <h3>{{ isEditing ? 'Edit' : 'Create' }} Case Study</h3>
        <form @submit.prevent="saveCaseStudy">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="currentItem.title" required>
          </div>
          
          <div class="form-group">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" v-model="currentItem.subtitle" required>
          </div>
          
          <div class="form-group">
            <label for="client">Client</label>
            <input type="text" id="client" v-model="currentItem.client" required>
          </div>
          
          <div class="form-group">
            <label for="date">Date</label>
            <input type="datetime-local" id="date" v-model="currentItem.date" required>
          </div>
          
          <div class="form-group">
            <label for="thumbnail">Thumbnail Path</label>
            <input type="text" id="thumbnail" v-model="currentItem.thumbnail" required>
          </div>
          
          <div class="form-group">
            <label for="services">Services (comma separated)</label>
            <input type="text" id="services" v-model="servicesInput" required>
          </div>
          
          <div class="form-group">
            <label for="overview">Overview</label>
            <textarea id="overview" v-model="currentItem.overview" rows="3" required></textarea>
          </div>
          
          <div class="form-group">
            <label>Content Sections</label>
            <div v-for="(section, index) in contentSections" :key="index" class="content-section-form">
              <h4>Section {{ index + 1 }}</h4>
              <input type="text" v-model="section.heading" placeholder="Section Heading" required>
              
              <div v-for="(para, pIndex) in section.paragraphs" :key="pIndex" class="paragraph-input">
                <textarea v-model="section.paragraphs[pIndex]" rows="3" placeholder="Paragraph text" required></textarea>
                <button type="button" @click="removeContentParagraph(index, pIndex)" class="remove-btn">Remove</button>
              </div>
              
              <button type="button" @click="addContentParagraph(index)" class="add-btn">Add Paragraph</button>
              
              <div class="list-items" v-if="section.listItems.length > 0">
                <h5>List Items</h5>
                <div v-for="(item, iIndex) in section.listItems" :key="iIndex" class="list-item-input">
                  <input type="text" v-model="section.listItems[iIndex]" placeholder="List item" required>
                  <button type="button" @click="removeListItem(index, iIndex)" class="remove-btn">Remove</button>
                </div>
              </div>
              
              <button type="button" @click="addListItem(index)" class="add-btn">Add List Item</button>
              <button type="button" @click="removeContentSection(index)" class="remove-btn">Remove Section</button>
            </div>
            
            <button type="button" @click="addContentSection" class="add-btn">Add Content Section</button>
          </div>
          
          <div class="form-group">
            <label>Testimonial</label>
            <textarea v-model="currentItem.testimonial.quote" rows="3" placeholder="Quote" required></textarea>
            <input type="text" v-model="currentItem.testimonial.author" placeholder="Author" required>
            <input type="text" v-model="currentItem.testimonial.title" placeholder="Title" required>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="save-btn">Save</button>
            <button type="button" @click="cancelEdit" class="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    
    <div v-if="activeTab === 'blogPosts'" class="content-section">
      <h2>Blog Posts</h2>
      <button @click="createNewBlogPost" class="create-btn">Create New Blog Post</button>
      
      <div class="items-list">
        <div v-for="(item, index) in blogPosts" :key="index" class="item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.category }} | {{ formatDate(item.date) }}</p>
          <div class="actions">
            <button @click="editBlogPost(item.path)" class="edit-btn">Edit</button>
          </div>
        </div>
      </div>
      
      <div v-if="showBlogPostForm" class="form-container">
        <h3>{{ isEditing ? 'Edit' : 'Create' }} Blog Post</h3>
        <form @submit.prevent="saveBlogPost">
          <div class="form-group">
            <label for="blog-title">Title</label>
            <input type="text" id="blog-title" v-model="currentItem.title" required>
          </div>
          
          <div class="form-group">
            <label for="category">Category</label>
            <input type="text" id="category" v-model="currentItem.category" required>
          </div>
          
          <div class="form-group">
            <label for="blog-date">Date</label>
            <input type="datetime-local" id="blog-date" v-model="currentItem.date" required>
          </div>
          
          <div class="form-group">
            <label for="blog-thumbnail">Thumbnail Path</label>
            <input type="text" id="blog-thumbnail" v-model="currentItem.thumbnail" required>
          </div>
          
          <div class="form-group">
            <label for="excerpt">Excerpt</label>
            <textarea id="excerpt" v-model="currentItem.excerpt" rows="2" required></textarea>
          </div>
          
          <div class="form-group">
            <label>Content Sections</label>
            <div v-for="(section, index) in contentSections" :key="index" class="content-section-form">
              <h4>Section {{ index + 1 }}</h4>
              <input type="text" v-model="section.heading" placeholder="Section Heading" required>
              
              <div v-for="(para, pIndex) in section.paragraphs" :key="pIndex" class="paragraph-input">
                <textarea v-model="section.paragraphs[pIndex]" rows="3" placeholder="Paragraph text" required></textarea>
                <button type="button" @click="removeContentParagraph(index, pIndex)" class="remove-btn">Remove</button>
              </div>
              
              <button type="button" @click="addContentParagraph(index)" class="add-btn">Add Paragraph</button>
              
              <div class="list-items" v-if="section.listItems.length > 0">
                <h5>List Items</h5>
                <div v-for="(item, iIndex) in section.listItems" :key="iIndex" class="list-item-input">
                  <input type="text" v-model="section.listItems[iIndex]" placeholder="List item" required>
                  <button type="button" @click="removeListItem(index, iIndex)" class="remove-btn">Remove</button>
                </div>
              </div>
              
              <button type="button" @click="addListItem(index)" class="add-btn">Add List Item</button>
              <button type="button" @click="removeContentSection(index)" class="remove-btn">Remove Section</button>
            </div>
            
            <button type="button" @click="addContentSection" class="add-btn">Add Content Section</button>
          </div>
          
          <div class="form-group">
            <label>Author</label>
            <input type="text" v-model="currentItem.author.name" placeholder="Name" required>
            <input type="text" v-model="currentItem.author.title" placeholder="Title" required>
            <textarea v-model="currentItem.author.bio" rows="2" placeholder="Bio" required></textarea>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="save-btn">Save</button>
            <button type="button" @click="cancelEdit" class="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { getCaseStudies, getBlogPosts, getCaseStudy, getBlogPost } from '../utils/xml';
import { saveXmlFile } from '../utils/admin-helpers';

export default {
  name: 'AdminView',
  setup() {
    const activeTab = ref('caseStudies');
    const caseStudies = ref([]);
    const blogPosts = ref([]);
    const showCaseStudyForm = ref(false);
    const showBlogPostForm = ref(false);
    const isEditing = ref(false);
    const currentItem = reactive({
      title: '',
      subtitle: '',
      client: '',
      date: '',
      thumbnail: '',
      overview: '',
      testimonial: {
        quote: '',
        author: '',
        title: ''
      },
      author: {
        name: '',
        title: '',
        bio: ''
      },
      excerpt: '',
      category: '',
      path: ''
    });
    const contentSections = ref([]);
    const servicesInput = ref('');
    
    onMounted(async () => {
      await loadCaseStudies();
      await loadBlogPosts();
    });
    
    async function loadCaseStudies() {
      caseStudies.value = await getCaseStudies();
    }
    
    async function loadBlogPosts() {
      blogPosts.value = await getBlogPosts();
    }
    
    function createNewCaseStudy() {
      resetForm();
      isEditing.value = false;
      showCaseStudyForm.value = true;
      showBlogPostForm.value = false;
      
      // Add initial content section
      contentSections.value = [{
        heading: '',
        paragraphs: [''],
        listItems: []
      }];
    }
    
    function createNewBlogPost() {
      resetForm();
      isEditing.value = false;
      showBlogPostForm.value = true;
      showCaseStudyForm.value = false;
      
      // Add initial content section
      contentSections.value = [{
        heading: '',
        paragraphs: [''],
        listItems: []
      }];
    }
    
    async function editCaseStudy(path) {
      const study = await getCaseStudy(path);
      if (!study) return;
      
      resetForm();
      
      currentItem.title = study.title;
      currentItem.subtitle = study.subtitle;
      currentItem.client = study.client;
      currentItem.date = study.date;
      currentItem.thumbnail = study.thumbnail;
      currentItem.overview = study.overview;
      currentItem.path = study.path;
      
      if (study.testimonial) {
        currentItem.testimonial.quote = study.testimonial.quote;
        currentItem.testimonial.author = study.testimonial.author;
        currentItem.testimonial.title = study.testimonial.title;
      }
      
      servicesInput.value = study.services.join(', ');
      
      // Parse content HTML to sections (simplified for demo)
      contentSections.value = [{
        heading: 'Sample Section',
        paragraphs: ['Sample paragraph text'],
        listItems: ['Sample list item']
      }];
      
      isEditing.value = true;
      showCaseStudyForm.value = true;
      showBlogPostForm.value = false;
    }
    
    async function editBlogPost(path) {
      const post = await getBlogPost(path);
      if (!post) return;
      
      resetForm();
      
      currentItem.title = post.title;
      currentItem.category = post.category;
      currentItem.date = post.date;
      currentItem.thumbnail = post.thumbnail;
      currentItem.excerpt = post.excerpt;
      currentItem.path = post.path;
      
      if (post.author) {
        currentItem.author.name = post.author.name;
        currentItem.author.title = post.author.title;
        currentItem.author.bio = post.author.bio;
      }
      
      // Parse content HTML to sections (simplified for demo)
      contentSections.value = [{
        heading: 'Sample Section',
        paragraphs: ['Sample paragraph text'],
        listItems: ['Sample list item']
      }];
      
      isEditing.value = true;
      showBlogPostForm.value = true;
      showCaseStudyForm.value = false;
    }
    
    function resetForm() {
      currentItem.title = '';
      currentItem.subtitle = '';
      currentItem.client = '';
      currentItem.date = '';
      currentItem.thumbnail = '';
      currentItem.overview = '';
      currentItem.testimonial.quote = '';
      currentItem.testimonial.author = '';
      currentItem.testimonial.title = '';
      currentItem.author.name = '';
      currentItem.author.title = '';
      currentItem.author.bio = '';
      currentItem.excerpt = '';
      currentItem.category = '';
      currentItem.path = '';
      servicesInput.value = '';
      contentSections.value = [];
    }
    
    function addContentSection() {
      contentSections.value.push({
        heading: '',
        paragraphs: [''],
        listItems: []
      });
    }
    
    function removeContentSection(index) {
      contentSections.value.splice(index, 1);
    }
    
    function addContentParagraph(sectionIndex) {
      contentSections.value[sectionIndex].paragraphs.push('');
    }
    
    function removeContentParagraph(sectionIndex, paraIndex) {
      contentSections.value[sectionIndex].paragraphs.splice(paraIndex, 1);
    }
    
    function addListItem(sectionIndex) {
      contentSections.value[sectionIndex].listItems.push('');
    }
    
    function removeListItem(sectionIndex, itemIndex) {
      contentSections.value[sectionIndex].listItems.splice(itemIndex, 1);
    }
    
    function saveCaseStudy() {
      // In a real implementation, this would generate XML and save to file
      alert('Case study saved! (Demo only - no actual file saved)');
      showCaseStudyForm.value = false;
      
      // In a real implementation, we would reload the case studies
      // loadCaseStudies();
    }
    
    function saveBlogPost() {
      // In a real implementation, this would generate XML and save to file
      alert('Blog post saved! (Demo only - no actual file saved)');
      showBlogPostForm.value = false;
      
      // In a real implementation, we would reload the blog posts
      // loadBlogPosts();
    }
    
    function cancelEdit() {
      showCaseStudyForm.value = false;
      showBlogPostForm.value = false;
      resetForm();
    }
    
    function formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    }
    
    return {
      activeTab,
      caseStudies,
      blogPosts,
      showCaseStudyForm,
      showBlogPostForm,
      isEditing,
      currentItem,
      contentSections,
      servicesInput,
      createNewCaseStudy,
      createNewBlogPost,
      editCaseStudy,
      editBlogPost,
      saveCaseStudy,
      saveBlogPost,
      cancelEdit,
      addContentSection,
      removeContentSection,
      addContentParagraph,
      removeContentParagraph,
      addListItem,
      removeListItem,
      formatDate
    };
  }
};
</script>

<style scoped>
.admin-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.tabs {
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
}

.tabs button {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.tabs button.active {
  border-bottom: 3px solid #000;
  font-weight: bold;
}

.create-btn {
  padding: 0.75rem 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.item {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 4px;
}

.item h3 {
  margin-top: 0;
}

.actions {
  margin-top: 1rem;
}

.edit-btn {
  padding: 0.5rem 1rem;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-container {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 4px;
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
input[type="datetime-local"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.content-section-form {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
}

.paragraph-input,
.list-item-input {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.add-btn {
  padding: 0.5rem 1rem;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.remove-btn {
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.save-btn {
  padding: 0.75rem 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn {
  padding: 0.75rem 1.5rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
