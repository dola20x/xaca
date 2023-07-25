# Example React Vite (Basic setup)

### Libraries, dependencies and tools

- Node v16.20.\* / Gallium
- React v18
- TypeScript
- React router dom v6.14
- React Helmet v6.1
- Axios v1.4
- React Redux
- Ant Design
- React Query (TanStack Query v3)
- Redux-toolkit
- React Hook Form
- Yup / Yup Resolvers
- Socket.io (Socket client)
- SCSS (sass)
- Storybook v7
- ESLint
- Hygen

### Files / Directories

| Path               | Purpose                                                            |
| ------------------ | ------------------------------------------------------------------ |
| /.storybook/       | contains Storybook config files                                    |
| /.eslintrc         | settings for `ESLint`                                              |
| /.hygen.js         | settings for `Hygen`                                               |
| /\_templates/      | contains scaffolding templates based on `Hygen`                    |
| /.vscode/          | settings for `Visual Studio Code` workspace                        |
| /package.json      | manifest file for Node.js projects                                 |
| /tsconfig.json     | settings for `TypeScript`                                          |
| /dist/             | contains production build codes                                    |
| /public/           | root folder that gets served up as our react app.                  |
| /src/components/   | contains Atomic Design components                                  |
| /src/containers/   | contains containers / layout                                       |
| /src/pages/        | contains pages                                                     |
| /src/assets/       | contains images, icons, fonts, videos                              |
| /src/stores/       | contains shared stores                                             |
| /src/services/     | contains shared services                                           |
| /src/styles/       | contains common styles: breakpoints, colors, font, mixin, function |
| /src/utils/        | contains common utils: utils, helper, contains, enums              |
| /src/index.tsx/    | contains root file                                                 |
| /src/App.tsx       | contains application page index                                    |
| /src/vite-env.d.ts | contains shared types                                              |

---

### Source Tree

```shell
.
├── _templates/                               # Hygen templates
│   ├── components/                           # Generates new components
│   ├── containers/                           # Generates new containers
│   └── pages/                                # Generates new pages
├── .storybook/                               # Storybook configuration
├── public/                                   # Static files
├── src/                                      # Main application source code
│   ├── assets/                               # Static resources
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/                           # Reusable components
│   │   ├── atoms/                            # Atomic components
│   │   │   ├── [ComponentName]/
│   │   │   │   ├── index.scss
│   │   │   │   ├── index.stories.tsx
│   │   │   │   └── index.tsx
│   │   │   └── more.../
│   │   ├── molecules/                        # Molecule components
│   │   ├── organisms/                        # Organism components
│   │   ├── templates/                        # Templates components
│   │   └── types.d.ts                        # Component TypeScript definitions
│   ├── containers/                           # Stateful components / containers layout
│   │   ├── [NameLayout]/
│   │   │   │   ├── index.scss
│   │   │   │   └── index.tsx
│   │   │   └── more.../
│   ├── hooks/                                # Custom React hooks
│   │   ├── store.ts
│   │   ├── use[HookName].tsx
│   │   └── .../
│   ├── pages/                                # Application pages (if using a page-based architecture)
│   │   ├── [NamePage]/
│   │   │   │   ├── index.scss
│   │   │   │   └── index.tsx
│   │   │   └── more.../
│   ├── routes/                               # Routing related files
│   │   ├── app.route.tsx
│   │   ├── protected.guard.tsx
│   │   ├── protected.routing.tsx
│   │   ├── rejected.guard.tsx
│   │   └── rejected.routing.tsx
│   ├── services/                             # Services, e.g., API call
│   │   ├── [module-name]/
│   │   │   │   ├── [moduleName].service.ts
│   │   │   │   ├── [useModuleNameQuery].ts
│   │   │   │   └── type.d.ts
│   │   ├── common/                           # Common services such as API service and interceptors
│   │   │   │   ├── api.service.ts
│   │   │   │   ├── request.interceptor.ts
│   │   │   │   ├── response.interceptor.ts
│   │   │   │   └── type.d.ts
│   │   │   └──type.d.ts
│   ├── socket/                               # Socket related files (if used)
│   ├── stores/                               # Directory containing data stores (if using a state management architecture)
│   │   ├── [moduleName].slice.ts
│   │   └── index.ts
│   ├── styles/                               # Global styles
│   ├── utils/                                # Utils/helper/contains/enums functions
│   ├── App.tsx                               # Main application component
│   ├── main.tsx                              # Application entry point
│   └── vite-env.d.tsx                        # Vite environment TypeScript definitions
```

### Command Line

| Path                 | Purpose                           |
| -------------------- | --------------------------------- |
| yarn dev             | start the project                 |
| yarn build           | build the project                 |
| gen:component        | generate new `atomic` component   |
| gen:page             | generate new page                 |
| gen:container        | generate new container            |
| yarn storybook       | run the storybook                 |
| yarn build-storybook | build the storybook               |
| yarn lint            | run `Eslint` to check the syntax  |
| yarn prettier        | check format code with `prettier` |
| yarn prettier:fix    | run format code with `prettier`   |

---

### `Abem`

<https://css-tricks.com/abem-useful-adaptation-bem/>

**Note: Use only the `lowercase` format for `className`.**

```tsx
//GOOD 🏆🏆🏆
export const Sample: React.FC = ({ children }) => <div className='a-sample'>{children}</div>;

//NOT GOOD 💩💩💩
export const Sample: React.FC = ({ children }) => <div className='a-Sample'>{children}</div>;
```

**Note: Use only the `Single_Underscore(_) && Single-Dash(-)` format for `className`.**

```tsx
//GOOD 🏆🏆🏆
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_title'>Title</span>
  </div>
);

//NOT GOOD 💩💩💩
export const Sample = () => (
  <div className='a--sample'>
    <span className='a--sample__title'>Title</span>
  </div>
);
```

**Note: The `className` must be formatted as `block_element-modifier`. But `Sometimes` it will be formatted as `block_element_element-modifier`.**

```tsx
//GOOD 🏆🏆🏆
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element'>One Element</span>
  </div>
);

export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2'>Two elements</span>
  </div>
);

//NOT GOOD 💩💩💩
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2_element3'>Greater than 2 elements</span>
  </div>
);
```

### `Atomic`

<https://bradfrost.com/blog/post/atomic-web-design/>

### `Components`

- Use only `React-Hook`
- Follow the `rules of hook` (<https://reactjs.org/docs/hooks-rules.html>)

### `Custom Hooks`

- Example: <https://usehooks-ts.com/introduction>

**Note: Use `ModifierUtils` to generate `modifiers` `className`.**

```tsx
export const Component: React.FC<Props> = (props) => (
  <div className={ModifierUtils.map('a-sample', props.modifiers)}>{props.children}</div>
);
```

**Note: Use `// eslint-disable-next-line react-hooks/exhaustive-deps` when you want to avoid checking of the `useEffect` syntax (also on `useMemo & useCallback`)**

```tsx
  useEffect(() => {
    Todo Something...
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```

**Note: Use simple syntax when the component has no properties.**

```tsx
//GOOD 🏆🏆🏆
export const Component = () => <div>Without children...</div>;

export const Component: React.FC = ({ children }) => <div>{children}</div>;

//NOT GOOD 💩💩💩
export const Component: React.FC = () => <div>Without children...</div>;
```

**Note: Clearly define the data type of the property.**

```tsx
//GOOD 🏆🏆🏆
interface Props {
  title: string;
}

//NOT GOOD 💩💩💩
interface Props {
  title: any;
}
```

**Note: Please leave TODO when you encounter some unresolved issues immediately.**

```tsx
export const Component = () => {
  // TODO: bla...bla...bla
  const Problems = 'Problems';

  return <div>Todo Something...</div>;
};
```

**Note: Use the filename as the component name. For example, Example.tsx should have a reference name of Example. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:**

```tsx
//GOOD 🏆🏆🏆
import Example from 'components/atoms/Example';

//NOT GOOD 💩💩💩
import Example from 'components/atoms/Example/index';
```

### `CSS/SCSS`

**Note: Instead of using `Color Variables`, do `NOT` use `Color Codes`. If the color code has not been defined. Please leave `TODO` about that.**

```css
.a-sample {
  // TODO: Replace with color variable
  color: rgb(0, 0, 0);
}
```

**Note: Instead of using `Color Variable` defined at `styles/colors.scss` and you can get name of color at <https://hexcol.com/> , do `NOT` use `Color Names | Color Hexs | ...`.**

```css
/* GOOD 🏆🏆🏆*/
.a-sample {
  // TODO: Replace with color variable
  color: $black;
}

/* NOT GOOD 💩💩💩 */
.a-sample {
  // TODO: Replace with color variable
  color: black; /* stylelint-disable-line color-named */
}
```

**Note: Please Use `font-family: $font-family-variable`, not Use `font-family: 'Font Name'` .**

```css
/* GOOD 🏆🏆🏆*/
.a-sample {
  // TODO: Replace with font-family variable
  font-family: $anotherFont;
}

/* NOT GOOD 💩💩💩 */
.a-sample {
  font-family: 'AnotherFont';
}
```

**Note: Please use `@function rem` with the properties have dynamic values (Scale-up and Scale-down). rem($SizeOnDesign)**

```css
/* GOOD 🏆🏆🏆*/
.a-sample {
  border-radius: 4px;
  font-size: rem(16);
}

/* NOT GOOD 💩💩💩 */
.a-sample {
  border-radius: 4px;
  font-size: 16px;
}
```

**Note: Instead of using `z-index: $variables`, do `NOT` use `z-index value`. Please define the `zIndex variable` before using that function. Please follow the instructions at `styles/variables.scss`**

```css
/* GOOD 🏆🏆🏆*/
.a-sample {
  z-index: $z-sample;
}

/* NOT GOOD 💩💩💩 */
.a-sample {
  z-index: 4;
}
```

### `React Hook Form + Yup Resolvers`

`Set controlId with Form Control`

```tsx
<div className='c-module'>
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group controlId='c-module_input-fieldName'>
      <Form.Label>fieldName</Form.Label>
      <Form.Control type='text' {...register('fieldName')} placeholder='...' />
    </Form.Group>
  </Form>
</div>
```

### `Storybook`

**Note: Make sure that you have included all instances of the component in the storybook when building it.**

### `Typescript`

**See more:**

- <https://www.typescriptlang.org/docs/>

- <https://www.typescriptlang.org/docs/handbook/utility-types.html>

### `Redux`

**See more:**

- redux: <https://redux.js.org/>
- redux-toolkit: <https://redux-toolkit.js.org/>
- react-redux: <https://react-redux.js.org/>

### `React-router-dom`

**See more: <https://reactrouter.com/en/main>**

### `Naming`

**1. Service:** `[moduleName].service.ts`

```ts
export const moduleNameService = {
  crud: async (args): Promise<unknown> => {
    const res = await ....
    return res.data;
  };
  // or
  method[Module][Action]: async (): Promise<unknown> => {
    const res = await ....
    return res.data;
  };
}
```

**2. Interfaces & Types:** `types.d.ts`

```ts
interface I[Module][Action][Request]{}

interface I[Module]Item {}

interface I[Module][Action][Response] extends IPaginationResponse<I[Module]Item[]> {
}
```

**3. Stores:**

- Reducer: `[moduleName][Reducer]`
- Action: `[actionName][Action]`
- Action Prefix: `[moduleName][Reducer]/[actionName][Action]`
- Slice: `[moduleName][Slice]`

```ts
export const getExampleAction = createAsyncThunk<IExampleResponse>(
  'exampleReducer/getExampleAction',
  async (_, { rejectWithValue }) => {
    // ...
  }
);

export const exampleSlice = createSlice({
  // ...
});
```

**4. Colors:** <https://hexcol.com/> Enter code => Get `color_name`

### `Git`

- Rebase: <https://git-scm.com/docs/git-rebase>
- Git branch format: <http://karma-runner.github.io/5.0/dev/git-commit-msg.html>

**Note: When create a new branch. The `type` will include `feature | bugfix | hotfix | release | support`**

```ssh
  git checkout -b type/feature-name
```

**Note: When committed. The `type` will include `build | chore | ci | docs | feat | fix | perf | refactor | revert | style | test`**

```ssh
  git commit -m 'type(:emoji: | feature-name): messages'
```

**The type must be one of the following:**

| Type         | Emoji                    | Description                                                                                                 |
| ------------ | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **build**    | 📦 :package:             | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| **chore**    |                          | Updating grunt tasks etc.; no production code change                                                        |
| **ci**       | 👷 :construction_worker: | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| **docs**     | 📚 :books:               | Documentation only changes                                                                                  |
| **feat**     | ✨ :sparkles:            | A new feature                                                                                               |
| **fix**      | 🐛 :bug:                 | A bug fix                                                                                                   |
| **perf**     | 🐎 :racehorse:           | A code change that improves performance                                                                     |
| **refactor** | 🔨 :hammer:              | A code change that neither fixes a bug nor adds a feature                                                   |
| **revert**   |                          |                                                                                                             |
| **style**    | 💄 :lipstick:            | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| **test**     | 🚨 :rotating_light:      | Adding missing tests or correcting existing tests                                                           |

**Emoji** <https://gist.github.com/parmentf/035de27d6ed1dce0b36a>

### Generate Template

- Generate component: `yarn gen:component → select level → enter component's name`
- Generate page: `yarn gen:page → enter page's name`
- Generate container: `yarn gen:container → enter container's name`

## Quy Trình Rebase

### Rebase để làm gì?

- Dùng để thay thế cho merge, nhưng tiếp cận theo 1 hướng khác
- Xử lý conflict
- Lấy code mới từ nhánh chính về

### Tại sao lại là rebase?

- Khi merge sẽ giải quyết tất cả conflict trong một commit, sẽ gây khó khăn trong việc giải quyết conflict
- Rebase sẽ giải quyết conflict ở ngay chính commit gây ra conflict, sẽ giúp dễ dàng xử lý conflict
- Khi rebase để xủ lý conflict, trường hợp xấu nhất mình vẫn có thể checkout và code lại commit đó từ đầu theo nội dung của commit message
- Merge sẽ lấy code của nhánh phụ làm code chính, nên dễ gây đè code, còn rebase sẽ lấy code của nhánh chính làm chính
- Khi rebase thì nhánh git sẽ gọn và trực quan hơn
- Rebase còn giúp ích cho các công việc quản lý khác

### Khi nào thì cần rebase?

- Rebase khi muốn lấy code từ nhánh develop về nhánh mình
- Khi gặp conflict phải resolve bằng rebase,
- Nên rebase thường xuyên (khi có commit mới ở develop) và rebase trước khi tạo pull request, tránh trường hợp gặp khó khăn khi rebase quá nhiều commit

### Quy trình rebase

**1.** lấy code mới nhất từ remote về và tiến hành rebase lên nhánh chính

> `git fetch` -> `git rebase origin/develop`

**2.** xử lý conflict nếu có

> Trong trường hợp xấu nhất thì checkout lại file bị conflict và code lại theo commit cũ tương ứng rebase trên branch chỉ có 1 người code đồng thời thì sẽ đơn giản, nhưng nếu 2 người code cùng lúc thì sẽ thêm nhiều case phải handle hơn, nhưng theo git-flow thì mình đã hạn chế trường hợp 1 branch nhiều người code cùng 1 thời điểm rồi

**3.** cần phải check kỹ code hiện tại sau khi rebase, phải đảm bảo tương đương code cũ, không bị lỗi, ...

**4.** chạy lệnh sau để chính thức đè code của mình lên remote `git push --force-with-lease` or `git push -f`

### Quy trình hotfix

**1.** Khi nào sẽ cần hotfix

> Khi cần fix gấp các `lỗi nghiêm trọng`, không thể merge nhánh development vào nhánh production được.

> Có thể dùng để phát triển 1 tính năng gấp cho production, `nhưng không nên lạm dụng`

**2.** Các bước thực hiện

> Nhánh hotfix phải tách ra từ nhánh production (sẽ khác nhau ở mỗi dự án), tên nhánh có dạng hotfix/`tên-nhánh`

> Tạo 2 PR từ 1 nhánh hotfix đó vào production và development lại, phải merge vào production trước

> Các bước tiếp theo phải thực hiện theo đúng thứ tự sau đây:

> - Xử lý conflict của PR vào production (nếu có)

> - Merge PR vào production, nhưng không được xoá nhánh

> - Xử lý conflict của PR vào development (nếu có)

> - Merge PR vào development, tick vào ô xoá nhánh

### Quy trình tách nhánh

- Tất cả các nhánh đều được tách từ nhánh chính là `develop`
- Trường hợp nhánh phụ có các nhánh con nữa thì checkout từ nhánh phụ, làm và merge vào nhánh phụ. Sau đó merge nhánh phụ vào nhánh chính là `develop`
