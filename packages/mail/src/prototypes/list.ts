import { ComponentPrototypeType } from '@music163/tango-helpers';

export const List: ComponentPrototypeType = {
  name: 'List',
  title: '列表',
  package: '@music163/tango-mail',
  icon: 'icon-list',
  type: 'element',
  hasChildren: true,
  childrenName: ['ListItem'],
  initChildren:
    '<ListItem text="list item" /><ListItem text="list item" /><ListItem text="list item" />',
  relatedImports: ['ListItem'],
  props: [
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
    {
      name: 'className',
      title: '类名',
      setter: 'textSetter',
    },
  ],
};

export const ListItem: ComponentPrototypeType = {
  name: 'ListItem',
  title: '列表项',
  package: '@music163/tango-mail',
  icon: 'icon-list',
  type: 'element',
  siblingNames: ['ListItem'],
  props: [
    {
      name: 'text',
      title: '文案',
      setter: 'textSetter',
    },
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
    {
      name: 'className',
      title: '类名',
      setter: 'textSetter',
    },
  ],
};
