package com.reactapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.ReactHome;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    ReactHome.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/react-home")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ReactHomeImpl
    implements ReactHome
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phase1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phase2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phase3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phase4;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phase5;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phase6;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phase7;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phase8;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String warning;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String continua;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logout;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("phase1")
    public String getPhase1() {
        return phase1;
    }

    @Override
    @JsonProperty("phase2")
    public String getPhase2() {
        return phase2;
    }

    @Override
    @JsonProperty("phase3")
    public String getPhase3() {
        return phase3;
    }

    @Override
    @JsonProperty("phase4")
    public String getPhase4() {
        return phase4;
    }

    @Override
    @JsonProperty("phase5")
    public String getPhase5() {
        return phase5;
    }

    @Override
    @JsonProperty("phase6")
    public String getPhase6() {
        return phase6;
    }

    @Override
    @JsonProperty("phase7")
    public String getPhase7() {
        return phase7;
    }

    @Override
    @JsonProperty("phase8")
    public String getPhase8() {
        return phase8;
    }

    @Override
    @JsonProperty("warning")
    public String getWarning() {
        return warning;
    }

    @Override
    @JsonProperty("continua")
    public String getContinua() {
        return continua;
    }

    @Override
    @JsonProperty("logout")
    public String getLogout() {
        return logout;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
