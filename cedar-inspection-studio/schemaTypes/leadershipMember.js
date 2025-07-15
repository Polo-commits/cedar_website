// ./schemas/leadershipMember.js
export default {
  name: 'leadershipMember',
  title: 'Leadership Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
  ],
};
