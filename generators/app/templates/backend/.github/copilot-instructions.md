# Project Guidelines


## TypeScript Type Annotations

This project follows a philosophy of **leveraging TypeScript's powerful type inference** while avoiding unnecessary explicit type annotations that can make code feel overwhelming and less JavaScript-like. The goal is to write clean, maintainable code that feels natural while preserving all the benefits of TypeScript's type safety.

### Core Principles

1. **Trust TypeScript's inference**: Modern TypeScript is exceptionally good at inferring types. Let it do the work.
2. **Explicit types only when necessary**: Add type annotations only when TypeScript cannot infer the type or when it improves code clarity.
3. **Keep it readable**: Code should feel like JavaScript with TypeScript benefits, not like a heavily annotated contract.

### Guidelines

#### ✅ **DO**: Rely on Type Inference

**Async Thunk Return Types**
```typescript
// ✅ Good - TypeScript can infer Promise<void>
export const loadPreferences = () => async (dispatch: AppDispatch) => {
    // implementation
};

// ❌ Avoid - Unnecessary explicit return type
export const loadPreferences = (): (dispatch: AppDispatch) => Promise<void> => async (dispatch: AppDispatch) => {
    // implementation
};
```

**Variable Assignments**
```typescript
// ✅ Good - TypeScript infers the types
const response = await fetchPreferences();
const isEnabled = true;
const items = preferences.map(pref => pref.id);

// ❌ Avoid - Unnecessary explicit types
const response: PreferencesResponse = await fetchPreferences();
const isEnabled: boolean = true;
const items: string[] = preferences.map(pref => pref.id);
```

**Callback Parameters**
```typescript
// ✅ Good - TypeScript can infer from context
preferences.filter(pref => pref.enabled);
items.map(item => item.toUpperCase());

// ❌ Avoid - Redundant when type is clear from context
preferences.filter((pref: Preference) => pref.enabled);
items.map((item: string) => item.toUpperCase());
```

#### ✅ **DO**: Use Explicit Types When Necessary

**Complex Generic Mappings**
```typescript
// ✅ Required - TypeScript needs help with complex generics
const storeLocations = preferences.map((preferenceStore: StoreLocation) => ({
    id: preferenceStore.storeId,
    name: preferenceStore.storeName
}));

// ❌ Would cause errors - TypeScript can't infer the mapping
const storeLocations = preferences.map(preferenceStore => ({
    id: preferenceStore.storeId, // Error: Property doesn't exist
    name: preferenceStore.storeName // Error: Property doesn't exist
}));
```

**Public Interface Definitions**
```typescript
// ✅ Good - Clear interface for consumers
export interface PreferencesState {
    current: Preferences;
    saved: Preferences;
    isDirty: boolean;
}

// ✅ Good - Function signatures that serve as documentation
export function validatePreferences(prefs: Preferences): ValidationResult {
    // implementation
}
```

**Union Type Definitions**
```typescript
// ✅ Good - Complex types that define data contracts
export type PreferenceAction = 
    | { type: 'SET_PREFERENCES'; payload: Preferences }
    | { type: 'RESET_PREFERENCES' }
    | { type: 'UPDATE_FIELD'; field: string; value: unknown };
```

#### ❌ **AVOID**: Over-Annotation

**Obvious Return Types**
```typescript
// ✅ Good - Let TypeScript infer
const savePreferences = () => async () => {
    await repository.save();
};

const getId = () => {
    return user.id;
};

// ❌ Avoid - TypeScript already knows these types
const savePreferences = (): () => Promise<void> => async () => {
    await repository.save();
};

const getId = (): string => {
    return user.id;
};
```

**Framework-Provided Types**
```typescript
// ✅ Good - Let React provide the types
const handleClick = (event) => {
    event.preventDefault();
};

useEffect(() => {
    // effect logic
}, []);

// ❌ Avoid - Framework already provides these types
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
};

useEffect((effect: () => void) => {
    // effect logic
}, []);
```

### Migration Strategy

When refactoring existing over-annotated code:

1. **Remove explicit return types** from functions where TypeScript can infer them
2. **Remove redundant parameter types** in callbacks where context provides the type
3. **Keep essential annotations** where inference fails or type safety requires them
4. **Verify with tests** that all functionality remains intact
5. **Check for TypeScript errors** to ensure type safety is maintained

### Benefits of This Approach

- **Cleaner, more readable code** that feels like enhanced JavaScript
- **Reduced maintenance burden** when types change upstream
- **Better developer experience** with less visual noise
- **Preserved type safety** through TypeScript's sophisticated inference
- **Easier onboarding** for developers transitioning from JavaScript

Remember: The goal is not to avoid types entirely, but to use them judiciously where they add value without overwhelming the code with unnecessary annotations.

## Boy Scouts' Rule

**Always leave the code cleaner than you found it.** When working on any file, take the opportunity to improve code quality in the areas you touch:

- **Clean up code style violations** you encounter while making other changes
- **Remove unnecessary type annotations** that TypeScript can infer
- **Fix formatting inconsistencies** in the code you're working on
- **Update outdated patterns** to follow current project guidelines
- **Remove unused imports or variables** you notice
- **Apply established patterns** from these guidelines to code you touch

This ensures continuous improvement of our codebase and prevents accumulation of technical debt. Even if your primary task isn't refactoring-related, take a moment to clean up issues you encounter along the way.