import { DefineComponent, Component } from 'vue'

export type VueSelectOption = string | Record<string, any>

export interface VueSelectProps {
  modelValue?: VueSelectOption | VueSelectOption[] | null
  components?: Record<string, Component>
  options?: VueSelectOption[]
  disabled?: boolean
  clearable?: boolean
  deselectFromDropdown?: boolean
  searchable?: boolean
  multiple?: boolean
  placeholder?: string
  transition?: string
  clearSearchOnSelect?: boolean
  submitSearchOnBlur?: boolean
  closeOnSelect?: boolean
  label?: string
  autocomplete?: string
  reduce?: (option: VueSelectOption) => any
  selectable?: (option: VueSelectOption) => boolean
  getOptionLabel?: (option: VueSelectOption) => string
  getOptionKey?: (option: VueSelectOption) => string
  onTab?: () => void
  taggable?: boolean
  tabindex?: number | null
  pushTags?: boolean
  filterable?: boolean
  filterBy?: (option: VueSelectOption, label: string, search: string) => boolean
  filter?: (options: VueSelectOption[], search: string) => VueSelectOption[]
  createOption?: (option: string) => VueSelectOption
  resetOnOptionsChange?:
    | boolean
    | ((
        newOptions: VueSelectOption[],
        oldOptions: VueSelectOption[],
        selectedValue: VueSelectOption[],
      ) => boolean)
  clearSearchOnBlur?: (props: {
    clearSearchOnSelect: boolean
    multiple: boolean
  }) => boolean
  noDrop?: boolean
  inputId?: string
  dir?: string
  selectOnTab?: boolean
  selectOnKeyCodes?: number[]
  searchInputQuerySelector?: string
  mapKeydown?: (
    map: Record<number, (e: KeyboardEvent) => void>,
    vm: VueSelectInstance,
  ) => Record<number, (e: KeyboardEvent) => void>
  appendToBody?: boolean
  calculatePosition?: (
    dropdownList: HTMLUListElement,
    component: VueSelectInstance,
    position: { width: string; top: string; left: string },
  ) => void | (() => void)
  dropdownShouldOpen?: (vm: VueSelectInstance) => boolean
  uid?: string | number
  loading?: boolean
}

export interface VueSelectEvents {
  open: () => void
  close: () => void
  'update:modelValue': (value: any) => void
  search: (search: string, loading: (toggle: boolean) => void) => void
  'search:compositionstart': () => void
  'search:compositionend': () => void
  'search:keydown': (event: KeyboardEvent) => void
  'search:blur': () => void
  'search:focus': () => void
  'search:input': (event: Event) => void
  'option:created': (option: VueSelectOption) => void
  'option:selecting': (option: VueSelectOption) => void
  'option:selected': (option: VueSelectOption) => void
  'option:deselecting': (option: VueSelectOption) => void
  'option:deselected': (option: VueSelectOption) => void
}

export interface VueSelectInstance extends VueSelectProps {
  search: string
  open: boolean
  isComposing: boolean
  pushedTags: VueSelectOption[]
  mutableLoading: boolean

  // Computed
  isTrackingValues: boolean
  selectedValue: VueSelectOption[]
  optionList: VueSelectOption[]
  searchEl: HTMLInputElement
  filteredOptions: VueSelectOption[]
  isValueEmpty: boolean
  dropdownOpen: boolean
  searchPlaceholder: string | undefined
  searching: boolean
  showClearButton: boolean

  // Methods
  select(option: VueSelectOption): void
  deselect(option: VueSelectOption): void
  clearSelection(): void
  submitSelection(): void
  toggleDropdown(event: Event): void
  isOptionSelected(option: VueSelectOption): boolean
  isOptionDeselectable(option: VueSelectOption): boolean
  optionComparator(a: VueSelectOption, b: VueSelectOption): boolean
  findOptionFromReducedValue(value: any): VueSelectOption
  updateValue(value: VueSelectOption | VueSelectOption[] | null): void
  onSearchBlur(): void
  onSearchFocus(): void
  onSearchKeyDown(event: KeyboardEvent): void
  closeSearchOptions(): void
  maybeDeleteValue(): void
  onEscape(): void
  typeAheadUp(): void
  typeAheadDown(): void
  typeAheadSelect(): void
}

export interface VueSelectMixins {
  ajax: Record<string, any>
  pointer: Record<string, any>
  pointerScroll: Record<string, any>
}

declare const VueSelect: DefineComponent<VueSelectProps>

export default VueSelect
