import {
  AutoFocus,
  AutoFocusModule,
  BaseIcon,
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-4SA6UO5M.js";
import {
  NG_VALUE_ACCESSOR,
  NgControl
} from "./chunk-G7VUU2SS.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-B5HUQXFL.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Injector,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-SRYCPNOB.js";

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var CheckIcon = class _CheckIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCheckIcon_BaseFactory;
    return function CheckIcon_Factory(ɵt) {
      return (ɵCheckIcon_BaseFactory || (ɵCheckIcon_BaseFactory = ɵɵgetInheritedFactory(_CheckIcon)))(ɵt || _CheckIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _CheckIcon,
    selectors: [["CheckIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
    template: function CheckIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: "CheckIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
var _c0 = ["input"];
var _c1 = (a0, a1, a2, a3) => ({
  "p-checkbox p-component": true,
  "p-checkbox-checked": a0,
  "p-checkbox-disabled": a1,
  "p-checkbox-focused": a2,
  "p-variant-filled": a3
});
var _c2 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c3 = (a0, a1, a2) => ({
  "p-checkbox-label": true,
  "p-checkbox-label-active": a0,
  "p-disabled": a1,
  "p-checkbox-label-focus": a2
});
function Checkbox_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 10);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r2.checkboxIcon);
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_5_ng_container_1_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Checkbox_ng_container_5_ng_container_1_span_1_Template, 1, 2, "span", 8)(2, Checkbox_ng_container_5_ng_container_1_CheckIcon_2_Template, 1, 2, "CheckIcon", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.checkboxIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.checkboxIcon);
  }
}
function Checkbox_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Checkbox_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Checkbox_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Checkbox_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, Checkbox_ng_container_5_span_2_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "icon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.checkboxIconTemplate);
  }
}
function Checkbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Checkbox_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Checkbox_ng_container_5_span_2_Template, 2, 2, "span", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.checkboxIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.checkboxIconTemplate);
  }
}
function Checkbox_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 14);
    ɵɵlistener("click", function Checkbox_label_6_Template_label_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      const input_r2 = ɵɵreference(3);
      return ɵɵresetView(ctx_r2.onClick($event, input_r2, true));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.labelStyleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction3(6, _c3, ctx_r2.checked(), ctx_r2.disabled, ctx_r2.focused));
    ɵɵattribute("for", ctx_r2.inputId)("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.label, "");
  }
}
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Checkbox),
  multi: true
};
var Checkbox = class _Checkbox {
  cd;
  injector;
  config;
  /**
   * Value of the checkbox.
   * @group Props
   */
  value;
  /**
   * Name of the checkbox group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Allows to select a boolean value instead of multiple values.
   * @group Props
   */
  binary;
  /**
   * Label of the checkbox.
   * @group Props
   */
  label;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the label.
   * @group Props
   */
  labelStyleClass;
  /**
   * Form control value.
   * @group Props
   */
  formControl;
  /**
   * Icon class of the checkbox icon.
   * @group Props
   */
  checkboxIcon;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that checkbox must be checked before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Callback to invoke on value change.
   * @param {CheckboxChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  templates;
  checkboxIconTemplate;
  model;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focused = false;
  constructor(cd, injector, config) {
    this.cd = cd;
    this.injector = injector;
    this.config = config;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this.checkboxIconTemplate = item.template;
          break;
      }
    });
  }
  onClick(event, checkbox, focus) {
    event.preventDefault();
    if (this.disabled || this.readonly) {
      return;
    }
    this.updateModel(event);
    if (focus) {
      checkbox.focus();
    }
  }
  updateModel(event) {
    let newModelValue;
    const selfControl = this.injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    const currentModelValue = selfControl && !this.formControl ? selfControl.value : this.model;
    if (!this.binary) {
      if (this.checked()) newModelValue = currentModelValue.filter((val) => !ObjectUtils.equals(val, this.value));
      else newModelValue = currentModelValue ? [...currentModelValue, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.model = newModelValue;
      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this.checked() ? this.falseValue : this.trueValue;
      this.model = newModelValue;
      this.onModelChange(newModelValue);
    }
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }
  handleChange(event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  writeValue(model) {
    this.model = model;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    setTimeout(() => {
      this.disabled = val;
      this.cd.markForCheck();
    });
  }
  checked() {
    return this.binary ? this.model === this.trueValue : ObjectUtils.contains(this.value, this.model);
  }
  static ɵfac = function Checkbox_Factory(ɵt) {
    return new (ɵt || _Checkbox)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Checkbox,
    selectors: [["p-checkbox"]],
    contentQueries: function Checkbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Checkbox_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      binary: [2, "binary", "binary", booleanAttribute],
      label: "label",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      style: "style",
      styleClass: "styleClass",
      labelStyleClass: "labelStyleClass",
      formControl: "formControl",
      checkboxIcon: "checkboxIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      variant: "variant"
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
    decls: 7,
    vars: 37,
    consts: [["input", ""], [3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "pAutoFocus", "", 3, "change", "focus", "blur", "value", "checked", "disabled", "readonly", "autofocus"], [1, "p-checkbox-box", 3, "click", "ngClass"], [4, "ngIf"], [3, "class", "ngClass", "click", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], ["class", "p-checkbox-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"], [3, "click", "ngClass"]],
    template: function Checkbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "input", 3, 0);
        ɵɵlistener("change", function Checkbox_Template_input_change_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleChange($event));
        })("focus", function Checkbox_Template_input_focus_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function Checkbox_Template_input_blur_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        });
        ɵɵelementEnd()();
        ɵɵelementStart(4, "div", 4);
        ɵɵlistener("click", function Checkbox_Template_div_click_4_listener($event) {
          ɵɵrestoreView(_r1);
          const input_r2 = ɵɵreference(3);
          return ɵɵresetView(ctx.onClick($event, input_r2, true));
        });
        ɵɵtemplate(5, Checkbox_ng_container_5_Template, 3, 2, "ng-container", 5);
        ɵɵelementEnd()();
        ɵɵtemplate(6, Checkbox_label_6_Template, 2, 10, "label", 6);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction4(28, _c1, ctx.checked(), ctx.disabled, ctx.focused, ctx.variant === "filled" || ctx.config.inputStyle() === "filled"));
        ɵɵattribute("data-pc-name", "checkbox")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "hiddenInputWrapper")("data-p-hidden-accessible", true);
        ɵɵadvance();
        ɵɵproperty("value", ctx.value)("checked", ctx.checked())("disabled", ctx.disabled)("readonly", ctx.readonly)("autofocus", ctx.autofocus);
        ɵɵattribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("required", ctx.required)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked())("data-pc-section", "hiddenInput");
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction3(33, _c2, ctx.checked(), ctx.disabled, ctx.focused));
        ɵɵattribute("data-p-highlight", ctx.checked())("data-p-disabled", ctx.disabled)("data-p-focused", ctx.focused)("data-pc-section", "input");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.checked());
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.label);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, CheckIcon],
    styles: ["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkbox, [{
    type: Component,
    args: [{
      selector: "p-checkbox",
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-checkbox p-component': true,
                'p-checkbox-checked': checked(),
                'p-checkbox-disabled': disabled,
                'p-checkbox-focused': focused,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'checkbox'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    [value]="value"
                    [attr.name]="name"
                    [checked]="checked()"
                    [attr.tabindex]="tabindex"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [attr.required]="required"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-checked]="checked()"
                    (change)="handleChange($event)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div
                class="p-checkbox-box"
                [ngClass]="{ 'p-highlight': checked(), 'p-disabled': disabled, 'p-focus': focused }"
                (click)="onClick($event, input, true)"
                [attr.data-p-highlight]="checked()"
                [attr.data-p-disabled]="disabled"
                [attr.data-p-focused]="focused"
                [attr.data-pc-section]="'input'"
            >
                <ng-container *ngIf="checked()">
                    <ng-container *ngIf="!checkboxIconTemplate">
                        <span *ngIf="checkboxIcon" class="p-checkbox-icon" [ngClass]="checkboxIcon" [attr.data-pc-section]="'icon'"></span>
                        <CheckIcon *ngIf="!checkboxIcon" [styleClass]="'p-checkbox-icon'" [attr.data-pc-section]="'icon'" />
                    </ng-container>
                    <span *ngIf="checkboxIconTemplate" class="p-checkbox-icon" [attr.data-pc-section]="'icon'">
                        <ng-template *ngTemplateOutlet="checkboxIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
        </div>
        <label
            (click)="onClick($event, input, true)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-checkbox-label': true, 'p-checkbox-label-active': checked(), 'p-disabled': disabled, 'p-checkbox-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
        >
            {{ label }}</label
        >
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: PrimeNGConfig
  }], {
    value: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    formControl: [{
      type: Input
    }],
    checkboxIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CheckboxModule = class _CheckboxModule {
  static ɵfac = function CheckboxModule_Factory(ɵt) {
    return new (ɵt || _CheckboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CheckboxModule,
    declarations: [Checkbox],
    imports: [CommonModule, AutoFocusModule, CheckIcon],
    exports: [Checkbox, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, AutoFocusModule, CheckIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule, CheckIcon],
      exports: [Checkbox, SharedModule],
      declarations: [Checkbox]
    }]
  }], null, null);
})();
export {
  CHECKBOX_VALUE_ACCESSOR,
  Checkbox,
  CheckboxModule
};
//# sourceMappingURL=primeng_checkbox.js.map
