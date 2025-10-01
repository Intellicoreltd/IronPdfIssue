import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");import {
  UserPreferenceService
} from "/chunk-XKQXD746.js";
import {
  BRANDING,
  BrandingService
} from "/chunk-C64LBTYW.js";
import {
  CookieConsentService,
  IntercomService
} from "/chunk-QLYT5IFT.js";
import "/chunk-M7TKYYMU.js";
import {
  AuthenticationService,
  catchUnauthorized
} from "/chunk-UXZ36J4V.js";
import {
  viewTransitionProvider
} from "/chunk-AAK2LM7W.js";
import "/chunk-QELJBB2X.js";
import {
  __async,
  __spreadValues
} from "/chunk-Y5RQAIA6.js";

// src/main.ts
import { isDevMode as isDevMode2 } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_core.js?v=ff14ca9c";
import { bootstrapApplication } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_platform-browser.js?v=ff14ca9c";
import { browserTracingIntegration, feedbackIntegration, init, showReportDialog } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@sentry_angular.js?v=ff14ca9c";
import { enableMapSet } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/immer.js?v=ff14ca9c";

// src/app/app.component.ts
import { PortalModule } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_cdk_portal.js?v=ff14ca9c";
import { CommonModule } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_common.js?v=ff14ca9c";
import { ChangeDetectionStrategy, Component } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_core.js?v=ff14ca9c";
import { RouterOutlet } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_router.js?v=ff14ca9c";
import * as i0 from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_core.js?v=ff14ca9c";
import * as i1 from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_common.js?v=ff14ca9c";
import * as i2 from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_cdk_portal.js?v=ff14ca9c";
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostAttrs: [1, "block"], features: [i0.\u0275\u0275ProvidersFeature([])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [
    CommonModule,
    i1.NgClass,
    i1.NgComponentOutlet,
    i1.NgForOf,
    i1.NgIf,
    i1.NgTemplateOutlet,
    i1.NgStyle,
    i1.NgSwitch,
    i1.NgSwitchCase,
    i1.NgSwitchDefault,
    i1.NgPlural,
    i1.NgPluralCase,
    RouterOutlet,
    PortalModule,
    i2.CdkPortal,
    i2.CdkPortalOutlet,
    i2.TemplatePortalDirective,
    i2.PortalHostDirective,
    i1.AsyncPipe,
    i1.UpperCasePipe,
    i1.LowerCasePipe,
    i1.JsonPipe,
    i1.SlicePipe,
    i1.DecimalPipe,
    i1.PercentPipe,
    i1.TitleCasePipe,
    i1.CurrencyPipe,
    i1.DatePipe,
    i1.I18nPluralPipe,
    i1.I18nSelectPipe,
    i1.KeyValuePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      imports: [
        CommonModule,
        RouterOutlet,
        PortalModule
      ],
      template: "<router-outlet/>",
      providers: [],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "block"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 20 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.component.ts%40AppComponent";
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(AppComponent, m.default, [i0, i1, i2], [CommonModule, RouterOutlet, PortalModule, Component, ChangeDetectionStrategy], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.config.ts
import { IMAGE_LOADER } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_common.js?v=ff14ca9c";
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_common_http.js?v=ff14ca9c";
import { DEFAULT_CURRENCY_CODE, ErrorHandler, inject as inject4, isDevMode, LOCALE_ID, provideAppInitializer, provideZoneChangeDetection, provideBrowserGlobalErrorListeners } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_core.js?v=ff14ca9c";
import { provideClientHydration, withEventReplay } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_platform-browser.js?v=ff14ca9c";
import { provideAnimations } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_platform-browser_animations.js?v=ff14ca9c";
import { PreloadAllModules, provideRouter, Router as Router2, withComponentInputBinding, withInMemoryScrolling, withPreloading, withRouterConfig, withNavigationErrorHandler } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_router.js?v=ff14ca9c";
import { provideServiceWorker } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_service-worker.js?v=ff14ca9c";
import { createErrorHandler, TraceService } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@sentry_angular.js?v=ff14ca9c";

// src/app/app.routes.ts
import { isPlatformBrowser } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_common.js?v=ff14ca9c";
import { inject, PLATFORM_ID } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_core.js?v=ff14ca9c";
var routes = [
  __spreadValues({
    path: "survey",
    canActivate: [() => {
      if (isPlatformBrowser(inject(PLATFORM_ID))) {
        inject(IntercomService).hide();
      }
      return true;
    }],
    loadChildren: () => import("/chunk-6NMOEB6C.js")
  }, false ? { \u0275entryName: "src/survey-instance/routes.ts" } : {}),
  __spreadValues({
    path: "",
    loadComponent: () => import("/chunk-FXTGX6SB.js"),
    loadChildren: () => import("/chunk-ICLQR4NQ.js")
  }, false ? { \u0275entryName: "src/app/manager-layout/manager-layout.component.ts" } : {}),
  __spreadValues({
    path: "**",
    loadComponent: () => import("/chunk-CYIU5NYO.js").then((m) => m.NotFoundComponent)
  }, false ? { \u0275entryName: "src/app/pages/not-found/not-found.component.ts" } : {})
];

// src/app/interceptors/application.interceptor.ts
import { isPlatformServer } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_common.js?v=ff14ca9c";
import { inject as inject2, PLATFORM_ID as PLATFORM_ID2 } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_core.js?v=ff14ca9c";
import { Router } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_router.js?v=ff14ca9c";
import { EMPTY, NEVER } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/rxjs.js?v=ff14ca9c";
var applicationInterceptor = (req, next) => {
  const server = isPlatformServer(inject2(PLATFORM_ID2));
  const router = inject2(Router);
  return next(req.clone({
    setHeaders: { "X-Requested-With": "XMLHttpRequest" }
  })).pipe(catchUnauthorized(() => {
    if (server)
      return EMPTY;
    if (router.url === "/") {
      return EMPTY;
    }
    const url = new URL("/api/authentication/challenge", location.toString());
    url.searchParams.set("returnUrl", router.url);
    location.assign(url.toString());
    return NEVER;
  }));
};

// src/app/services/app-title-strategy.service.ts
import { inject as inject3, Injectable } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_core.js?v=ff14ca9c";
import { Title } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_platform-browser.js?v=ff14ca9c";
import { TitleStrategy } from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_router.js?v=ff14ca9c";
import * as i02 from "/@fs/home/sean/Projects/Intellicore/Projects/Fusion Forms/form-builder/Intellicore.FormDesigner.Frontend/.angular/cache/20.3.2/form-builder/vite/deps/@angular_core.js?v=ff14ca9c";
var AppTitleStrategyService = class _AppTitleStrategyService extends TitleStrategy {
  #title = inject3(Title);
  #brandingService = inject3(BrandingService);
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    const branding = this.#brandingService.branding();
    if (title !== void 0) {
      this.#title.setTitle(`${title} | ${branding.name}`);
    } else {
      this.#title.setTitle(branding.name);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AppTitleStrategyService_BaseFactory;
    return function AppTitleStrategyService_Factory(__ngFactoryType__) {
      return (\u0275AppTitleStrategyService_BaseFactory || (\u0275AppTitleStrategyService_BaseFactory = i02.\u0275\u0275getInheritedFactory(_AppTitleStrategyService)))(__ngFactoryType__ || _AppTitleStrategyService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({ token: _AppTitleStrategyService, factory: _AppTitleStrategyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(AppTitleStrategyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function provideAppTitleStrategy() {
  return {
    provide: TitleStrategy,
    useClass: AppTitleStrategyService
  };
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-GB"
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "GBP"
    },
    viewTransitionProvider,
    provideAnimations(),
    provideAppTitleStrategy(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withRouterConfig({
        paramsInheritanceStrategy: "always",
        onSameUrlNavigation: "reload",
        canceledNavigationResolution: "computed",
        urlUpdateStrategy: "eager"
      }),
      withComponentInputBinding(),
      // temporary fix for sentry error popup
      // withViewTransitions({
      //   onViewTransitionCreated: ({transition, to}) => {
      //     const router = inject(Router);
      //     const toTree = createUrlTreeFromSnapshot(to, []);
      //     if (
      //       router.isActive(toTree, {
      //         paths: 'exact',
      //         matrixParams: 'exact',
      //         fragment: 'ignored',
      //         queryParams: 'ignored'
      //       })
      //     ) {
      //       transition.skipTransition();
      //     }
      //   }
      // }),
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({
        anchorScrolling: "enabled",
        scrollPositionRestoration: "top"
      }),
      withNavigationErrorHandler((error) => {
        console.error("Navigation Error", error);
      })
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptorsFromDi(), withInterceptors([applicationInterceptor])),
    provideServiceWorker("safety-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    }),
    {
      provide: IMAGE_LOADER,
      useValue: (config) => {
        let url = config.width ? config.src.replace(".webp", `-${config.width}w.webp`) : config.src;
        if (config.loaderParams?.["height"]) {
          url += `?height=${config.loaderParams["height"]}`;
        }
        return url;
      }
    },
    {
      provide: BRANDING,
      useFactory: () => {
        const brandingService = inject4(BrandingService);
        return brandingService.branding();
      }
    },
    {
      provide: ErrorHandler,
      useFactory: () => {
        const sentryHandler = createErrorHandler({
          showDialog: true
        });
        return new class ErrorHandlerWrapper extends ErrorHandler {
          handleError(error) {
            if (error instanceof Error) {
              if (error.name === "EmptyError") {
                return;
              }
            }
            sentryHandler.handleError(error);
          }
        }();
      }
    },
    {
      provide: TraceService,
      deps: [Router2]
    },
    provideAppInitializer(() => __async(null, null, function* () {
      inject4(TraceService);
      inject4(IntercomService);
      try {
        yield Promise.all([
          inject4(BrandingService).initialize(),
          inject4(AuthenticationService).initialize(),
          inject4(UserPreferenceService).initialize(),
          inject4(CookieConsentService).initialize()
        ]);
      } catch (err) {
        console.error(err);
      }
    }))
  ]
};

// src/main.ts
enableMapSet();
init({
  dsn: "https://6215e04fb1732e84828c9309302ce583@o1151236.ingest.us.sentry.io/4506791326842880",
  enabled: !isDevMode2(),
  tunnel: "/tunnel",
  integrations: [
    browserTracingIntegration(),
    feedbackIntegration({
      showBranding: true,
      autoInject: false
    })
  ],
  beforeSend(event, hint) {
    if (event.exception && event.event_id) {
      showReportDialog({ eventId: event.event_id });
    }
    return event;
  }
});
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9pbnRlcmNlcHRvcnMvYXBwbGljYXRpb24uaW50ZXJjZXB0b3IudHMiLCJzcmMvYXBwL3NlcnZpY2VzL2FwcC10aXRsZS1zdHJhdGVneS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNEZXZNb2RlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwQXBwbGljYXRpb259IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHticm93c2VyVHJhY2luZ0ludGVncmF0aW9uLCBmZWVkYmFja0ludGVncmF0aW9uLCBpbml0LCBzaG93UmVwb3J0RGlhbG9nfSBmcm9tICdAc2VudHJ5L2FuZ3VsYXInO1xuaW1wb3J0IHtlbmFibGVNYXBTZXR9IGZyb20gJ2ltbWVyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7YXBwQ29uZmlnfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcblxuZW5hYmxlTWFwU2V0KCk7XG5cbmluaXQoe1xuICBkc246ICdodHRwczovLzYyMTVlMDRmYjE3MzJlODQ4MjhjOTMwOTMwMmNlNTgzQG8xMTUxMjM2LmluZ2VzdC51cy5zZW50cnkuaW8vNDUwNjc5MTMyNjg0Mjg4MCcsXG4gIGVuYWJsZWQ6ICFpc0Rldk1vZGUoKSxcbiAgdHVubmVsOiAnL3R1bm5lbCcsXG4gIGludGVncmF0aW9uczogW1xuICAgIGJyb3dzZXJUcmFjaW5nSW50ZWdyYXRpb24oKSxcbiAgICBmZWVkYmFja0ludGVncmF0aW9uKHtcbiAgICAgIHNob3dCcmFuZGluZzogdHJ1ZSxcbiAgICAgIGF1dG9JbmplY3Q6IGZhbHNlLFxuICAgIH0pLFxuICBdLFxuICBiZWZvcmVTZW5kKGV2ZW50LCBoaW50KSB7XG4gICAgaWYgKGV2ZW50LmV4Y2VwdGlvbiAmJiBldmVudC5ldmVudF9pZCkge1xuICAgICAgc2hvd1JlcG9ydERpYWxvZyh7ZXZlbnRJZDogZXZlbnQuZXZlbnRfaWR9KTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9LFxufSk7XG5cbmJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcENvbXBvbmVudCwgYXBwQ29uZmlnKVxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiIsImltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyT3V0bGV0LFxuICAgIFBvcnRhbE1vZHVsZVxuICBdLFxuICB0ZW1wbGF0ZTogJzxyb3V0ZXItb3V0bGV0Lz4nLFxuICBwcm92aWRlcnM6IFtdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYmxvY2snXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cbiIsImltcG9ydCB7QlJBTkRJTkcsIEJyYW5kaW5nU2VydmljZX0gZnJvbSAnJC9hcHAvc2VydmljZXMvYnJhbmRpbmcvYnJhbmRpbmcuc2VydmljZSc7XG5pbXBvcnQge0Nvb2tpZUNvbnNlbnRTZXJ2aWNlfSBmcm9tICckL2FwcC9zZXJ2aWNlcy9jb25zZW50L2Nvb2tpZS1jb25zZW50LnNlcnZpY2UnO1xuaW1wb3J0IHtJbnRlcmNvbVNlcnZpY2V9IGZyb20gJyQvYXBwL3NlcnZpY2VzL2ludGVyY29tLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVNlcnZpY2V9IGZyb20gJyQvYXBwL3NlcnZpY2VzL3VzZXItcHJlZmVyZW5jZS5zZXJ2aWNlJztcbmltcG9ydCB7SU1BR0VfTE9BREVSLCBJbWFnZUxvYWRlckNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7cHJvdmlkZUh0dHBDbGllbnQsIHdpdGhGZXRjaCwgd2l0aEludGVyY2VwdG9ycywgd2l0aEludGVyY2VwdG9yc0Zyb21EaX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgQXBwbGljYXRpb25Db25maWcsXG4gIERFRkFVTFRfQ1VSUkVOQ1lfQ09ERSxcbiAgRXJyb3JIYW5kbGVyLFxuICBpbmplY3QsXG4gIGlzRGV2TW9kZSxcbiAgTE9DQUxFX0lELFxuICBwcm92aWRlQXBwSW5pdGlhbGl6ZXIsXG4gIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uLFxuICBwcm92aWRlQnJvd3Nlckdsb2JhbEVycm9yTGlzdGVuZXJzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtwcm92aWRlQ2xpZW50SHlkcmF0aW9uLCB3aXRoRXZlbnRSZXBsYXl9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtwcm92aWRlQW5pbWF0aW9uc30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIFByZWxvYWRBbGxNb2R1bGVzLFxuICBwcm92aWRlUm91dGVyLFxuICBSb3V0ZXIsXG4gIHdpdGhDb21wb25lbnRJbnB1dEJpbmRpbmcsXG4gIHdpdGhJbk1lbW9yeVNjcm9sbGluZyxcbiAgd2l0aFByZWxvYWRpbmcsXG4gIHdpdGhSb3V0ZXJDb25maWcsXG4gIHdpdGhOYXZpZ2F0aW9uRXJyb3JIYW5kbGVyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge3Byb3ZpZGVTZXJ2aWNlV29ya2VyfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XG5pbXBvcnQge2NyZWF0ZUVycm9ySGFuZGxlciwgVHJhY2VTZXJ2aWNlfSBmcm9tICdAc2VudHJ5L2FuZ3VsYXInO1xuaW1wb3J0IHtyb3V0ZXN9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQge2FwcGxpY2F0aW9uSW50ZXJjZXB0b3J9IGZyb20gJy4vaW50ZXJjZXB0b3JzL2FwcGxpY2F0aW9uLmludGVyY2VwdG9yJztcbmltcG9ydCB7cHJvdmlkZUFwcFRpdGxlU3RyYXRlZ3l9IGZyb20gJy4vc2VydmljZXMvYXBwLXRpdGxlLXN0cmF0ZWd5LnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQge3ZpZXdUcmFuc2l0aW9uUHJvdmlkZXJ9IGZyb20gJy4vc2VydmljZXMvdmlldy10cmFuc2l0aW9uJztcblxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IExPQ0FMRV9JRCxcbiAgICAgIHVzZVZhbHVlOiAnZW4tR0InLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogREVGQVVMVF9DVVJSRU5DWV9DT0RFLFxuICAgICAgdXNlVmFsdWU6ICdHQlAnLFxuICAgIH0sXG4gICAgdmlld1RyYW5zaXRpb25Qcm92aWRlcixcbiAgICBwcm92aWRlQW5pbWF0aW9ucygpLFxuICAgIHByb3ZpZGVBcHBUaXRsZVN0cmF0ZWd5KCksXG4gICAgcHJvdmlkZVpvbmVDaGFuZ2VEZXRlY3Rpb24oe2V2ZW50Q29hbGVzY2luZzogdHJ1ZX0pLFxuICAgIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMoKSxcbiAgICBwcm92aWRlUm91dGVyKFxuICAgICAgcm91dGVzLFxuICAgICAgd2l0aFJvdXRlckNvbmZpZyh7XG4gICAgICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6ICdhbHdheXMnLFxuICAgICAgICBvblNhbWVVcmxOYXZpZ2F0aW9uOiAncmVsb2FkJyxcbiAgICAgICAgY2FuY2VsZWROYXZpZ2F0aW9uUmVzb2x1dGlvbjogJ2NvbXB1dGVkJyxcbiAgICAgICAgdXJsVXBkYXRlU3RyYXRlZ3k6ICdlYWdlcicsXG4gICAgICB9KSxcbiAgICAgIHdpdGhDb21wb25lbnRJbnB1dEJpbmRpbmcoKSxcbiAgICAgIC8vIHRlbXBvcmFyeSBmaXggZm9yIHNlbnRyeSBlcnJvciBwb3B1cFxuICAgICAgLy8gd2l0aFZpZXdUcmFuc2l0aW9ucyh7XG4gICAgICAvLyAgIG9uVmlld1RyYW5zaXRpb25DcmVhdGVkOiAoe3RyYW5zaXRpb24sIHRvfSkgPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IHJvdXRlciA9IGluamVjdChSb3V0ZXIpO1xuICAgICAgLy8gICAgIGNvbnN0IHRvVHJlZSA9IGNyZWF0ZVVybFRyZWVGcm9tU25hcHNob3QodG8sIFtdKTtcbiAgICAgIC8vICAgICBpZiAoXG4gICAgICAvLyAgICAgICByb3V0ZXIuaXNBY3RpdmUodG9UcmVlLCB7XG4gICAgICAvLyAgICAgICAgIHBhdGhzOiAnZXhhY3QnLFxuICAgICAgLy8gICAgICAgICBtYXRyaXhQYXJhbXM6ICdleGFjdCcsXG4gICAgICAvLyAgICAgICAgIGZyYWdtZW50OiAnaWdub3JlZCcsXG4gICAgICAvLyAgICAgICAgIHF1ZXJ5UGFyYW1zOiAnaWdub3JlZCdcbiAgICAgIC8vICAgICAgIH0pXG4gICAgICAvLyAgICAgKSB7XG4gICAgICAvLyAgICAgICB0cmFuc2l0aW9uLnNraXBUcmFuc2l0aW9uKCk7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9KSxcbiAgICAgIHdpdGhQcmVsb2FkaW5nKFByZWxvYWRBbGxNb2R1bGVzKSxcbiAgICAgIHdpdGhJbk1lbW9yeVNjcm9sbGluZyh7XG4gICAgICAgIGFuY2hvclNjcm9sbGluZzogJ2VuYWJsZWQnLFxuICAgICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uOiAndG9wJyxcbiAgICAgIH0pLFxuICAgICAgd2l0aE5hdmlnYXRpb25FcnJvckhhbmRsZXIoZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdOYXZpZ2F0aW9uIEVycm9yJywgZXJyb3IpO1xuICAgICAgfSksXG4gICAgKSxcbiAgICBwcm92aWRlQ2xpZW50SHlkcmF0aW9uKHdpdGhFdmVudFJlcGxheSgpKSxcbiAgICBwcm92aWRlSHR0cENsaWVudChcbiAgICAgIHdpdGhGZXRjaCgpLFxuICAgICAgd2l0aEludGVyY2VwdG9yc0Zyb21EaSgpLFxuICAgICAgd2l0aEludGVyY2VwdG9ycyhbYXBwbGljYXRpb25JbnRlcmNlcHRvcl0pXG4gICAgKSxcbiAgICBwcm92aWRlU2VydmljZVdvcmtlcignc2FmZXR5LXdvcmtlci5qcycsIHtcbiAgICAgIGVuYWJsZWQ6ICFpc0Rldk1vZGUoKSxcbiAgICAgIHJlZ2lzdHJhdGlvblN0cmF0ZWd5OiAncmVnaXN0ZXJXaGVuU3RhYmxlOjMwMDAwJyxcbiAgICB9KSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBJTUFHRV9MT0FERVIsXG4gICAgICB1c2VWYWx1ZTogKGNvbmZpZzogSW1hZ2VMb2FkZXJDb25maWcpID0+IHtcbiAgICAgICAgbGV0IHVybCA9IGNvbmZpZy53aWR0aFxuICAgICAgICAgID8gY29uZmlnLnNyYy5yZXBsYWNlKCcud2VicCcsIGAtJHtjb25maWcud2lkdGh9dy53ZWJwYClcbiAgICAgICAgICA6IGNvbmZpZy5zcmM7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5sb2FkZXJQYXJhbXM/LlsnaGVpZ2h0J10pIHtcbiAgICAgICAgICB1cmwgKz0gYD9oZWlnaHQ9JHtjb25maWcubG9hZGVyUGFyYW1zWydoZWlnaHQnXX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBCUkFORElORyxcbiAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnJhbmRpbmdTZXJ2aWNlID0gaW5qZWN0KEJyYW5kaW5nU2VydmljZSk7XG4gICAgICAgIHJldHVybiBicmFuZGluZ1NlcnZpY2UuYnJhbmRpbmcoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBFcnJvckhhbmRsZXIsXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbnRyeUhhbmRsZXIgPSBjcmVhdGVFcnJvckhhbmRsZXIoe1xuICAgICAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgY2xhc3MgRXJyb3JIYW5kbGVyV3JhcHBlciBleHRlbmRzIEVycm9ySGFuZGxlciB7XG4gICAgICAgICAgb3ZlcnJpZGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdFbXB0eUVycm9yJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZW50cnlIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBUcmFjZVNlcnZpY2UsXG4gICAgICBkZXBzOiBbUm91dGVyXSxcbiAgICB9LFxuICAgIHByb3ZpZGVBcHBJbml0aWFsaXplcihhc3luYyAoKSA9PiB7XG4gICAgICBpbmplY3QoVHJhY2VTZXJ2aWNlKTtcbiAgICAgIGluamVjdChJbnRlcmNvbVNlcnZpY2UpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgaW5qZWN0KEJyYW5kaW5nU2VydmljZSkuaW5pdGlhbGl6ZSgpLFxuICAgICAgICAgIGluamVjdChBdXRoZW50aWNhdGlvblNlcnZpY2UpLmluaXRpYWxpemUoKSxcbiAgICAgICAgICBpbmplY3QoVXNlclByZWZlcmVuY2VTZXJ2aWNlKS5pbml0aWFsaXplKCksXG4gICAgICAgICAgaW5qZWN0KENvb2tpZUNvbnNlbnRTZXJ2aWNlKS5pbml0aWFsaXplKCksXG4gICAgICAgIF0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgXSxcbn07XG4iLCJpbXBvcnQge2FjdGl2ZU9yZ2FuaXNhdGlvbkd1YXJkfSBmcm9tICckL2FwcC9ndWFyZHMvYWN0aXZlLW9yZ2FuaXNhdGlvbi5ndWFyZCc7XG5pbXBvcnQge2xpY2Vuc2VkR3VhcmR9IGZyb20gJyQvYXBwL2d1YXJkcy9saWNlbnNlZEd1YXJkJztcbmltcG9ydCB7cmVnaXN0ZXJHdWFyZH0gZnJvbSAnJC9hcHAvZ3VhcmRzL3JlZ2lzdGVyLmd1YXJkJztcbmltcG9ydCB7SW50ZXJjb21TZXJ2aWNlfSBmcm9tICckL2FwcC9zZXJ2aWNlcy9pbnRlcmNvbS5zZXJ2aWNlJztcbmltcG9ydCB7T3JnYW5pemF0aW9uU2VydmljZX0gZnJvbSAnJC9hcHAvc2VydmljZXMvb3JnYW5pemF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHthZ3JlZW1lbnRBY2NlcHRlZEd1YXJkfSBmcm9tICckL2RvbWFpbi9vcmdhbmlzYXRpb24vYWdyZWVtZW50LWFjY2VwdGVkLmd1YXJkJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge2luamVjdCwgUExBVEZPUk1fSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzJztcbmltcG9ydCB7YXV0aGVudGljYXRlZEd1YXJkfSBmcm9tICcuL2d1YXJkcy9hdXRoZW50aWNhdGVkLmd1YXJkJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3N1cnZleScsXG4gICAgY2FuQWN0aXZhdGU6IFsoKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIoaW5qZWN0KFBMQVRGT1JNX0lEKSkpIHtcbiAgICAgICAgaW5qZWN0KEludGVyY29tU2VydmljZSkuaGlkZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfV0sXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL3N1cnZleS1pbnN0YW5jZS9yb3V0ZXMnKVxuICB9LFxuICB7XG4gICAgcGF0aDonJyxcbiAgICBsb2FkQ29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vbWFuYWdlci1sYXlvdXQvbWFuYWdlci1sYXlvdXQuY29tcG9uZW50JyksXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vbWFuYWdlci1sYXlvdXQvcm91dGVzJyksXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnKionLFxuICAgIGxvYWRDb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudCcpLnRoZW4oKG0pID0+IG0uTm90Rm91bmRDb21wb25lbnQpLFxuICB9LFxuXTtcbiIsImltcG9ydCB7aXNQbGF0Zm9ybVNlcnZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SHR0cEludGVyY2VwdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7aW5qZWN0LCBQTEFURk9STV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RU1QVFksIE5FVkVSfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hVbmF1dGhvcml6ZWR9IGZyb20gJy4uL3J4anMnO1xuXG5leHBvcnQgY29uc3QgYXBwbGljYXRpb25JbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yRm4gPSAocmVxLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHNlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIoaW5qZWN0KFBMQVRGT1JNX0lEKSk7XG4gIGNvbnN0IHJvdXRlciA9IGluamVjdChSb3V0ZXIpO1xuXG5cbiAgcmV0dXJuIG5leHQocmVxLmNsb25lKHtcbiAgICBzZXRIZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSxcbiAgfSkpLnBpcGUoXG4gICAgY2F0Y2hVbmF1dGhvcml6ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNlcnZlcikgcmV0dXJuIEVNUFRZO1xuXG4gICAgICBpZiAocm91dGVyLnVybCA9PT0gJy8nKSB7XG4gICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCgnL2FwaS9hdXRoZW50aWNhdGlvbi9jaGFsbGVuZ2UnLCBsb2NhdGlvbi50b1N0cmluZygpKTtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdyZXR1cm5VcmwnLCByb3V0ZXIudXJsKTtcblxuICAgICAgbG9jYXRpb24uYXNzaWduKHVybC50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiBORVZFUjtcbiAgICB9KSxcbiAgKTtcbn07XG4iLCJpbXBvcnQge2luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RpdGxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7Um91dGVyU3RhdGVTbmFwc2hvdCwgVGl0bGVTdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QnJhbmRpbmdTZXJ2aWNlfSBmcm9tICckL2FwcC9zZXJ2aWNlcy9icmFuZGluZy9icmFuZGluZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwVGl0bGVTdHJhdGVneVNlcnZpY2UgZXh0ZW5kcyBUaXRsZVN0cmF0ZWd5IHtcbiAgcmVhZG9ubHkgI3RpdGxlID0gaW5qZWN0KFRpdGxlKTtcbiAgcmVhZG9ubHkgI2JyYW5kaW5nU2VydmljZSA9IGluamVjdChCcmFuZGluZ1NlcnZpY2UpO1xuXG4gIG92ZXJyaWRlIHVwZGF0ZVRpdGxlKHNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogdm9pZCB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmJ1aWxkVGl0bGUoc25hcHNob3QpO1xuICAgIGNvbnN0IGJyYW5kaW5nID0gdGhpcy4jYnJhbmRpbmdTZXJ2aWNlLmJyYW5kaW5nKCk7XG4gICAgaWYgKHRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuI3RpdGxlLnNldFRpdGxlKGAke3RpdGxlfSB8ICR7YnJhbmRpbmcubmFtZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jdGl0bGUuc2V0VGl0bGUoYnJhbmRpbmcubmFtZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQXBwVGl0bGVTdHJhdGVneSgpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBUaXRsZVN0cmF0ZWd5LFxuICAgIHVzZUNsYXNzOiBBcHBUaXRsZVN0cmF0ZWd5U2VydmljZSxcbiAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFRLGFBQUFBLGtCQUFnQjtBQUN4QixTQUFRLDRCQUEyQjtBQUNuQyxTQUFRLDJCQUEyQixxQkFBcUIsTUFB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QUksTUFBTSw0QkFBNEIsYUFBWTtVQUM5QyxZQUFZLE9BQVU7QUFDN0IsZ0JBQUksaUJBQWlCLE9BQU87QUFDMUIsa0JBQUksTUFBTSxTQUFTLGNBQWM7QUFDL0I7Y0FDRjtZQUNGO0FBRUEsMEJBQWMsWUFBWSxLQUFLO1VBQ2pDOztNQUVKOztJQUVGO01BQ0UsU0FBUztNQUNULE1BQU0sQ0FBQ0MsT0FBTTs7SUFFZixzQkFBc0IsTUFBVztBQUMvQixNQUFBRCxRQUFPLFlBQVk7QUFDbkIsTUFBQUEsUUFBTyxlQUFlO0FBRXRCLFVBQUk7QUFDRixjQUFNLFFBQVEsSUFBSTtVQUNoQkEsUUFBTyxlQUFlLEVBQUUsV0FBVTtVQUNsQ0EsUUFBTyxxQkFBcUIsRUFBRSxXQUFVO1VBQ3hDQSxRQUFPLHFCQUFxQixFQUFFLFdBQVU7VUFDeENBLFFBQU8sb0JBQW9CLEVBQUUsV0FBVTtTQUN4QztNQUNILFNBQVMsS0FBSztBQUNaLGdCQUFRLE1BQU0sR0FBRztNQUNuQjtJQUNGLEVBQUM7Ozs7O0FGckpMLGFBQVk7QUFFWixLQUFLO0VBQ0gsS0FBSztFQUNMLFNBQVMsQ0FBQ0UsV0FBUztFQUNuQixRQUFRO0VBQ1IsY0FBYztJQUNaLDBCQUF5QjtJQUN6QixvQkFBb0I7TUFDbEIsY0FBYztNQUNkLFlBQVk7S0FDYjs7RUFFSCxXQUFXLE9BQU8sTUFBSTtBQUNwQixRQUFJLE1BQU0sYUFBYSxNQUFNLFVBQVU7QUFDckMsdUJBQWlCLEVBQUMsU0FBUyxNQUFNLFNBQVEsQ0FBQztJQUM1QztBQUNBLFdBQU87RUFDVDtDQUNEO0FBRUQscUJBQXFCLGNBQWMsU0FBUyxFQUN6QyxNQUFNLENBQUMsUUFBUSxRQUFRLE1BQU0sR0FBRyxDQUFDOyIsIm5hbWVzIjpbImlzRGV2TW9kZSIsImluamVjdCIsIlJvdXRlciIsImluamVjdCIsIlBMQVRGT1JNX0lEIiwiaW5qZWN0IiwiUExBVEZPUk1fSUQiLCJpbmplY3QiLCJpbmplY3QiLCJpbmplY3QiLCJSb3V0ZXIiLCJpc0Rldk1vZGUiXX0=