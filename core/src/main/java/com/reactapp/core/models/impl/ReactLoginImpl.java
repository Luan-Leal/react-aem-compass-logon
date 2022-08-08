package com.reactapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.ReactLogin;
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
    ReactLogin.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/react-login")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ReactLoginImpl
    implements ReactLogin
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String login;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String error;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String button;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @Override
    @JsonProperty("text")
    public String getText() {
        return text;
    }

    @Override
    @JsonProperty("login")
    public String getLogin() {
        return login;
    }

    @Override
    @JsonProperty("error")
    public String getError() {
        return error;
    }

    @Override
    @JsonProperty("button")
    public String getButton() {
        return button;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
