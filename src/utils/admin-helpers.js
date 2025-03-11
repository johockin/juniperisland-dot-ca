import fs from 'fs';
import path from 'path';

// Function to generate XML for a case study
export function generateCaseStudyXml(caseStudy) {
  const services = caseStudy.services.map(service => `    <service>${service}</service>`).join('\n');
  
  let contentSections = '';
  if (caseStudy.contentSections && caseStudy.contentSections.length > 0) {
    contentSections = caseStudy.contentSections.map(section => {
      let sectionXml = `    <section>\n      <heading>${section.heading}</heading>`;
      
      // Add paragraphs
      if (section.paragraphs && section.paragraphs.length > 0) {
        section.paragraphs.forEach(para => {
          sectionXml += `\n      <paragraph>${para}</paragraph>`;
        });
      }
      
      // Add list items if any
      if (section.listItems && section.listItems.length > 0) {
        sectionXml += '\n      <list>';
        section.listItems.forEach(item => {
          sectionXml += `\n        <item>${item}</item>`;
        });
        sectionXml += '\n      </list>';
      }
      
      sectionXml += '\n    </section>';
      return sectionXml;
    }).join('\n');
  }
  
  const testimonial = caseStudy.testimonial ? 
    `  <testimonial>
    <quote>${caseStudy.testimonial.quote}</quote>
    <author>${caseStudy.testimonial.author}</author>
    <title>${caseStudy.testimonial.title}</title>
  </testimonial>` : '';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<case-study>
  <title>${caseStudy.title}</title>
  <subtitle>${caseStudy.subtitle}</subtitle>
  <date>${caseStudy.date}</date>
  <thumbnail>${caseStudy.thumbnail}</thumbnail>
  <client>${caseStudy.client}</client>
  <services>
${services}
  </services>
  <overview>${caseStudy.overview}</overview>
  <content>
${contentSections}
  </content>
${testimonial}
</case-study>`;
}

// Function to generate XML for a blog post
export function generateBlogPostXml(blogPost) {
  let contentSections = '';
  if (blogPost.contentSections && blogPost.contentSections.length > 0) {
    contentSections = blogPost.contentSections.map(section => {
      let sectionXml = `    <section>\n      <heading>${section.heading}</heading>`;
      
      // Add paragraphs
      if (section.paragraphs && section.paragraphs.length > 0) {
        section.paragraphs.forEach(para => {
          sectionXml += `\n      <paragraph>${para}</paragraph>`;
        });
      }
      
      // Add list items if any
      if (section.listItems && section.listItems.length > 0) {
        sectionXml += '\n      <list>';
        section.listItems.forEach(item => {
          sectionXml += `\n        <item>${item}</item>`;
        });
        sectionXml += '\n      </list>';
      }
      
      sectionXml += '\n    </section>';
      return sectionXml;
    }).join('\n');
  }
  
  const author = blogPost.author ? 
    `  <author>
    <name>${blogPost.author.name}</name>
    <title>${blogPost.author.title}</title>
    <bio>${blogPost.author.bio}</bio>
  </author>` : '';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<blog-post>
  <title>${blogPost.title}</title>
  <category>${blogPost.category}</category>
  <date>${blogPost.date}</date>
  <thumbnail>${blogPost.thumbnail}</thumbnail>
  <excerpt>${blogPost.excerpt}</excerpt>
  <content>
${contentSections}
  </content>
${author}
</blog-post>`;
}

// Function to save XML file
export async function saveXmlFile(type, data, filename) {
  try {
    let xmlContent;
    let directory;
    
    if (type === 'case-study') {
      xmlContent = generateCaseStudyXml(data);
      directory = path.resolve('content/xml/case-studies');
    } else if (type === 'blog-post') {
      xmlContent = generateBlogPostXml(data);
      directory = path.resolve('content/xml/blog');
    } else {
      throw new Error(`Unknown content type: ${type}`);
    }
    
    // Ensure directory exists
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    
    const filePath = path.join(directory, `${filename}.xml`);
    fs.writeFileSync(filePath, xmlContent, 'utf-8');
    
    return { success: true, filePath };
  } catch (error) {
    console.error('Error saving XML file:', error);
    return { success: false, error: error.message };
  }
}
