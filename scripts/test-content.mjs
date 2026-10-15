import assert from 'node:assert/strict';
import { projects } from '../lib/projects.js';
import { services } from '../lib/services.js';

function unique(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} must be unique`);
}

unique(projects.map(({ slug }) => slug), 'Project slugs');
unique(services.map(({ slug }) => slug), 'Service slugs');

for (const project of projects) {
  assert.ok(project.title && project.description && project.type, `${project.slug}: missing core content`);
  assert.ok(project.results?.length > 0, `${project.slug}: missing verifiable outcomes`);
  assert.ok(project.features?.length >= 3, `${project.slug}: insufficient confirmed features`);
  if (project.screenshot) {
    assert.ok(project.screenshotWidth > 0 && project.screenshotHeight > 0, `${project.slug}: screenshot dimensions missing`);
  }
}

for (const service of services) {
  assert.ok(service.title && service.seoTitle && service.seoDescription, `${service.slug}: missing SEO content`);
  assert.ok(service.idealFor?.length >= 3, `${service.slug}: missing audience fit`);
  assert.ok(service.deliverables?.length >= 3, `${service.slug}: missing deliverables`);
  assert.ok(service.outcomes?.length >= 3, `${service.slug}: missing outcomes`);
  assert.ok(projects.some(({ slug }) => slug === service.caseSlug), `${service.slug}: related case not found`);
}

console.log(`Validated ${projects.length} projects and ${services.length} service pages.`);
