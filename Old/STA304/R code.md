```R
mutate() #all original rows and add new col only
summarize() # need to done after grouping
select() # choosing columns
filter() # keep row (observations)
#case_when #create new variable (col)
vote_data %>%
  mutate(age_group = case_when(
    age < 30            ~ "Under 30",
    age >= 30 & age < 60 ~ "30–59",
    age >= 60           ~ "60+",
    TRUE                ~ NA_character_
  ))
  
# design #this is Frequentist
svydesign()

# Plot
ggplot(aes(x, y)) %>% geom_point()
```